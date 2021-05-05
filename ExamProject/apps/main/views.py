from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.db.models import Q
from django.contrib import messages
from .models import User, Job, JobByUser
# Create your views here.


def index(request):
    if 'user_id' not in request.session:
        return render(request, 'main/index.html')

    return redirect('jobs:dashboard')


def create(request):
    print(request.POST)

    errors = User.objects.validate(request.POST)

    if errors:
        for error in errors:
            messages.error(request, error)

        return redirect('jobs:index')

    user_id = User.objects.easy_create(request.POST)

    request.session['user_id'] = user_id
    print('SESSION USER ID: ', request.session['user_id'])
    return redirect('jobs:dashboard')


def process(request):
    if 'user_id' not in request.session:
        return redirect('jobs:index')

    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "jobs": Job.objects.all() & Job.objects.exclude(job_by_user__user=request.session['user_id']),
        "jobs_by_user": JobByUser.objects.all()
    }

    return render(request, 'main/dashboard.html', context)


def logout(request):
    request.session.clear()
    return redirect('jobs:index')

def login(request):
    valid, result = User.objects.login(request.POST)

    if not valid:
        messages.error(request, result)
        return redirect('jobs:index')

    request.session['user_id'] = result
    return redirect('jobs:dashboard')


def addJob(request):
    return render(request, 'main/add_job.html')


def registerJob(request):
    print(request.POST)

    errors = Job.objects.validate(request.POST)

    if errors:
        for error in errors:
            messages.error(request, error)

        return redirect('jobs:addJob')


    user_id = request.session['user_id']
    Job.objects.easy_create(request.POST, user_id)
    # request.session['job'] = job_id
    return redirect('jobs:dashboard')


def view(request, job_id):

    context = {
        "job": Job.objects.get(id= job_id)
    }
    return render(request, 'main/view_job.html', context)


def registerMyJob(request, job_id):

    # jobs= Job.objects.exclude(job_by_user__user=request.session['user_id'])

    # request.session['jobs'] = jobs
    user_id = request.session['user_id']
    JobByUser.objects.registerMyJob(job_id, user_id)
    return redirect('jobs:dashboard')


def remove(request, job_id):
    job = Job.objects.get(id=job_id)

    job.delete()
    return redirect('jobs:dashboard')


def done(request, job_id):

    from_me = JobByUser.objects.filter(job=job_id)
    if from_me:
        from_me.delete()
        me = Job.objects.get(id=job_id)
        me.delete()
    else:
        job = Job.objects.get(id=job_id)
        job.delete()
    return redirect('jobs:dashboard')


def editJob(request, job_id):
    job = Job.objects.get(id = job_id)
    context = {
        "job": job
    }
    return render(request, 'main/edit_job.html', context)

def updateJob(request, job_id):
    updated_job = Job.objects.updated_job(request.POST, job_id)
    return redirect(reverse('jobs:editJob', kwargs={"job_id": updated_job.id}))