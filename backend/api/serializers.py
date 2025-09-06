from rest_framework import serializers
from .models import *

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class PlanSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanSubmission
        fields = '__all__'

class BrandingInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = BrandingInquiry
        fields = '__all__'

class WebDesignInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = WebDesignInquiry
        fields = '__all__'

class AboutContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutContact
        fields = '__all__'

class DigitalContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DigitalContactMessage
        fields = '__all__'


class InternetMarketingLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = InternetMarketingLead
        fields = '__all__'


class SEOContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = SEOContact
        fields = '__all__'


class ContectcontactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentMarketingLead
        fields = '__all__'