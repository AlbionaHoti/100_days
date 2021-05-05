from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^create/$', views.create, name="create"),
    url(r'^dashboard/$', views.process, name="dashboard"),
    url(r'^logout/$', views.logout, name="logout"),
    url(r'^login/$', views.login, name="login"),
    url(r'^addJob/$', views.addJob, name="addJob"),
    url(r'^registerJob/$', views.registerJob, name="registerJob"),
    url(r'^editJob/(?P<job_id>\d+)$', views.editJob, name="editJob"),
    url(r'^updateJob/(?P<job_id>\d+)$', views.updateJob, name="updateJob"),
    url(r'^view/(?P<job_id>\d+)$', views.view, name="view"),
    url(r'^registerMyJob/(?P<job_id>\d+)$', views.registerMyJob, name="registerMyJob"),
    url(r'^remove/(?P<job_id>\d+)$', views.remove, name="remove"),
    url(r'^done/(?P<job_id>\d+)$', views.done, name="done")
]
