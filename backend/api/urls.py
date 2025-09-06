from django.urls import path
from .views import *

urlpatterns = [
    path('contact/', contact_form_submit, name='contact-form'),
    path('contactus/', contact_us_submit),
    path('contactuspg/', contact_us, name='contact_uspg'),
    path('plancontact/', plan_content, name='plan_contact'),
    path('brandcontact/', branding_inquiry, name='brand_contact'),
    path('webcontact/', webdesign_inquiry, name='web_contact'),
    path('aboutcontact/', about_contact_submit, name='about_contact'),
    path('digitalmarketingcontact/', digital_contact_form, name='Digital_Marketing_contact'),
    path('internetmarketingcontact/', internet_marketing_contact, name='Internet_Marketing_contact'),
    path('soecontact/', seo_contact, name='SEO_contact'),
    path('contentmarketingcontact/', content_marketing_contact, name='Contect_Marketing_contact'),
]