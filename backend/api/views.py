from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import *
import requests


def send_whatsapp(phone, message):
    url = 'https://abcd1234.ngrok.io/send'
    payload = {
        'phone': phone, 
        'message': message
    }
    try:
        res = requests.post(url, json=payload)
        return res.json()
    except Exception as e:
        return {'error': str(e)}

@api_view(['POST'])
def contact_form_submit(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(data.phone, f"Hello {data.first_name}, thank you for contacting us!")

        subject = "New Contact Form Lead"
        message = f"""
        Name: {data.first_name}, {data.last_name}
        Email: {data.email}
        Phone: {data.phone}
        Message: {data.message}
        """
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['violetinfotech25@gmail.com'],
            fail_silently=False,
        )

        return Response({'message': 'Success'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def contact_us_submit(request):
    serializer = ContactUsSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(data.phone, f"Hi {data.name}, your message was received. We'll be in touch shortly!")

        subject = "New Contact Us Lead"
        message = f"""
        Name: {data.name}
        Email: {data.email}
        Phone: {data.phone}
        Message: {data.message}
        """
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['violetinfotech25@gmail.com'],
            fail_silently=False,
        )

        return Response({'message': 'Message sent successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def contact_us(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(data.phone, f"Hi {data.name}, thanks for reaching out! Our team will respond soon.")

        subject = "New General Lead"
        message = f"""
        Name: {data.name}
        Email: {data.email}
        Phone: {data.phone}
        Message: {data.message}
        """
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['violetinfotech25@gmail.com'],
            fail_silently=False,
        )

        return Response({'message': 'Message sent successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def plan_content(request):
    serializer = PlanSubmissionSerializer(data=request.data)
    
    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(data.phone, f"Hi {data.first_name}, thanks for choosing our {data.selected_category} {data.selected_plan} plan!, We will contact you soon.")

        subject = "New Plan Lead"
        message = f"""
        First Name: {data.first_name}
        Last Name: {data.last_name}
        Email: {data.email}
        Phone: {data.phone}
        Selected Category: {data.selected_category}
        Selected Plan: {data.selected_plan}
        """

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['violetinfotech25@gmail.com'],
            fail_silently=False,
        )

        return Response({'message': 'Plan submitted successfully!'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def branding_inquiry(request):
    serializer = BrandingInquirySerializer(data=request.data)
    
    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(
            data.phone,
            f"Hi {data.name}, thanks for contacting us for {data.service}. Our team will reach out to you shortly!"
        )

        subject = "New Branding Lead"
        message = f"""
        Name: {data.name}
        Email: {data.email}
        Phone: {data.phone}
        Service Requested: {data.service}
        """

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['violetinfotech25@gmail.com'],
            fail_silently=False,
        )

        return Response({'message': 'Inquiry submitted and notifications sent successfully!'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def webdesign_inquiry(request):
    serializer = WebDesignInquirySerializer(data=request.data)
    
    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(
            data.phone,
            f"Hi {data.name}, thanks for contacting Violet Infotech for {data.service}. We’ll reach out soon!"
        )

        subject = "New Web Design Lead"
        message = f"""
        Name: {data.name}
        Email: {data.email}
        Phone: {data.phone}
        Service: {data.service}
        """
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['violetinfotech25@gmail.com'],
            fail_silently=False,
        )

        return Response({'message': 'Inquiry received successfully!'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def about_contact_submit(request):
    serializer = AboutContactSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(data.phone, f"Hi {data.name}, thanks for contacting us about {data.service}.")

        subject = "New About Page Contact"
        message = f"""
        Name: {data.name}
        Phone: {data.phone}
        Email: {data.email}
        Service: {data.service}
        """
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, ['violetinfotech25@gmail.com'])

        return Response({'message': 'Message sent successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def digital_contact_form(request):
    serializer = DigitalContactMessageSerializer(data=request.data)

    if serializer.is_valid():
        data = serializer.save()

        send_whatsapp(
            data.phone,
            f"Hi {data.name}, thanks for contacting Violet Infotech. We’ll reach out soon!"
        )

        subject = "New Digital Marketing Lead"
        message = f"""
        Name: {data.name}
        Email: {data.email}
        Phone: {data.phone}
        Message:
        {data.message}
        """

        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['violetinfotech25@gmail.com'],
            fail_silently=False,
        )

        return Response({'message': 'Inquiry received successfully!'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['POST'])
def internet_marketing_contact(request):
    serializer = InternetMarketingLeadSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.save()

        # Send WhatsApp
        send_whatsapp(
            data.phone,
            f"Hi {data.name}, thanks for contacting us about {data.service}."
        )

        # Send Email
        subject = "New Internet Marketing Lead"
        message = f"""
        Name: {data.name}
        Phone: {data.phone}
        Email: {data.email}
        Service: {data.service}
        """
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, ['violetinfotech25@gmail.com'])

        return Response({'message': 'Message sent successfully'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def seo_contact(request):
    serializer = SEOContactSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.save()

        # Send WhatsApp
        send_whatsapp(
            data.phone,
            f"Hi {data.name}, thanks for contacting us about {data.service}."
        )

        # Send Email
        subject = "New SEO Lead"
        message = f"""
        Name: {data.name}
        Phone: {data.phone}
        Email: {data.email}
        Service: {data.service}
        Preferred Date: {data.date}
        Preferred Time: {data.time}
        """
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, ['violetinfotech25@gmail.com'])

        return Response({'message': 'Message sent successfully'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def content_marketing_contact(request):
    serializer = ContectcontactSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.save()

        # Send WhatsApp
        send_whatsapp(
            data.phone,
            f"Hi {data.name}, thanks for contacting us about {data.service}."
        )

        # Send Email
        subject = "New Content Marketing Lead"
        message = f"""
        Name: {data.name}
        Phone: {data.phone}
        Email: {data.email}
        Service: {data.service}
        """
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, ['violetinfotech25@gmail.com'])

        return Response({'message': 'Message sent successfully'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)