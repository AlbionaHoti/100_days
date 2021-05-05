from django.db import models

# Create your models here.

from django.db import models

# Create your models here.
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class UserManager(models.Manager):
    # models.Manager has filter function, .all
    def validate(self, form):
        errors = []
        if len(form['first_name']) < 2:
            errors.append("First name must be at least 2 characters long.")

        if len(form['last_name']) < 2:
            errors.append("Last name must be at least 2 characters long.")

        if len(form['password']) < 8 & len(form['confirm_password']) < 8:
            errors.append("Password must be at least 8 characters long.")

        if form['password'] != form['confirm_password']:
            errors.append("You need to confirm the password!")

        if not EMAIL_REGEX.match(form['email']):
            errors.append("Must be a valid email address.")

        # try:
        #     User.objects.get(email=form['email'])
        #     error.append('Email already in use')
        # except:

        existing_email = User.objects.filter(email=form['email'])
        if existing_email:
            errors.append("Email already in use")
            print(existing_email)

        # select queries

        # User.objects.get = will return to us either the specific single thing that exist in db with that parameter  -  the prob: if there are more than one -
        # you get an error - if there isn;t anything it throws error

         # User.objects.filter
        # User.objects.exclude  = not inclde the things that match
        # User.objects.all = has no filter parameters
        return errors

    def easy_create(self, form):
        # hash password
        hashed_pw = bcrypt.hashpw(form['password'].encode(),
                                  bcrypt.gensalt())
        # create
        user = User.objects.create(
            first_name=form['first_name'],
            last_name=form['last_name'],
            email=form['email'],
            pw_hash=hashed_pw
        )

        # return id
        return user.id

    def login(self, form):
        existing_users = User.objects.filter(email=form['email'])

        if existing_users:
            user = existing_users[0]
            if bcrypt.checkpw(form['password'].encode(), user.pw_hash.encode()):
                return(True, user.id)
        return(False, "Email or password incorrect!")


class User(models.Model):
    # When we inherit from a class - get all attributes and the methods we are inheriting from
    # give us the init function from Model...
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    '''
     We are not using __init__() ...
     1. We don't want to override the init method - we are using the one
        we inheritted
     2. This syntax first_name = ... without putting inside the init
        we are saying that this is a property of the class, not of specific object
     '''
    email = models.CharField(max_length=255)
    pw_hash = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # shadow column "tweets" - list of tweets - reference to the tweet table
    objects = UserManager()

    def __repr__(self):
        return "<User: %s>" % self.first_name

    def __str__(self):
        return "<User: %s>" % self.first_name


class JobManager(models.Manager):

    def validate(self, form):
        errors = []
        if len(form['title']) < 3:
            errors.append("Title must be at least 3 characters long.")

        if len(form['description']) < 10:
            errors.append("Description must be at least 10 characters long.")

        if len(form['location']) <= 0:
            errors.append("Location must not be blank.")

        return errors

    def easy_create(self, form, user_id):

        if 'user_id' in form: 

            user = User.objects.get(id=user_id)
            JobByUser.objects.create(
                user=user,
                job=Job.objects.create(
                    title=form['title'],
                    location=form['location'],
                    description=form['description'],
                )
            )
        else: 
            Job.objects.create(
                title=form['title'],
                location=form['location'],
                description=form['description'],
            )

        # return id
        # return job.id
    def updated_job(self, form, job_id):
        job = Job.objects.get(id=job_id)
        print(job)
        job.title = form['title']
        job.description = form['description']
        job.location = form['location']
        job.save()
        return job


class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = JobManager()

    def __repr__(self):
        return "<Job: %s>" % self.title

    def __str__(self):
        return "<Job: %s>" % self.title


class JobByUserManager(models.Manager):

    def registerMyJob(self, job_id, user_id):

        # Job.objects.exclude(job_by_user__user=user_id)
        user = User.objects.get(id=user_id)

        job = Job.objects.get(id=job_id)
        JobByUser.objects.create(
            user=user,
            job=job
        )

        # job.delete()


class JobByUser(models.Model):
    user = models.ForeignKey(User, related_name="jobs_by_user")
    job = models.ForeignKey(Job, related_name="job_by_user")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = JobByUserManager()
