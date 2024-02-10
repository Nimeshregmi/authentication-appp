
from os import getenv,path,environ
from pathlib import Path
import dotenv
from django.core.management.utils import get_random_secret_key

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

dotenv_file=BASE_DIR/ '.env.local'

if path.isfile(dotenv_file):
    dotenv.load_dotenv(dotenv_file)

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

SECRET_KEY = getenv('DJANGO_SECRET_KEY',get_random_secret_key())

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = environ.get('DEBUG')=='True'
# DEBUG=True

ALLOWED_HOSTS = getenv('ALLOWED_HOSTS', '127.0.0.1,localhost').split(',')

ALLOWED_HOSTS=[]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'social_django',
    'corsheaders',
    'storages',
    'djoser',
    'user',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'full_auth.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

AUTHENTICATION_BACKENDS=[
    'django.contrib.auth.backends.ModelBackend',
    'social_core.backends.google.GoogleOAuth2',
    'social_core.backends.facebook.FacebookOAuth2',
]

WSGI_APPLICATION = 'full_auth.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Email settings for sending email from django
EMAIL_BACKEND = 'django_ses.SESBackend'
DEFAULT_FROM_EMAIL=getenv('AWS_SES_FROM_EMAIL')
AWS_ACCESS_KEY_ID=getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY=getenv('AWS_SECRET_ACCESS_KEY')
AWS_SES_REGION_NAME=getenv('AWS_SES_REGION_NAME')
AWS_SES_REGION_ENDPOINT=f'email.{AWS_SES_REGION_NAME}.amazonaws.com'
USE_SES_V2 = True
AWS_SES_FROM_EMAIL=getenv('AWS_SES_FROM_EMAIL')

DOMAIN=getenv('DOMAIN')
SITE_NAME='Full Auth'

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT=BASE_DIR/ 'static'
MEDIA_URL='media/'
MEDIA_ROOT= BASE_DIR/ 'media'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES':[
        'user.authentication.CustomJWTAuthentication'
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated'
    ]
}

DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': 'password-reset/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': True,
    'ACTIVATION_URL': 'activate/{uid}/{token}',
    'USER_CREATE_PASSWORD_RETYPE':True,
    'PASSWORD_RESET_CONFIRM_RETYPE':True,
    'TOKEN_MODEL':None,
    'SERIALIZERS': {},
    'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': environ.get('REDIRECT_URLS')
}

CORS_ALLOWED_ORIGINS=getenv('CORS_ALLOWED_ORIGINS','http://127.0.0.1:3000,http://localhost:3000').split(',')
CORS_ALLOW_CREDENTIALS=True

AUTH_COOKIE='access'
AUTH_COOKIE_MAX_AGE=60*12
AUTH_COOKIE_ACCESS_MAX_AGE=60*5
AUTH_COOKIE_REFRESH_MAX_AGE=60*60*24
AUTH_COOKIE_SECURE=getenv('AUTH_COOKIE_SECURE','True')=='True'
AUTH_COOKIE_HTTP_ONLY=True
AUTH_COOKIE_PATH='/'
AUTH_COOKIE_SAMESITE='None'


SOCIAL_AUTH_GOOGLE_OAUTH2_KEY=getenv('GOOGLE_AUTH_KEY')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET=getenv('GOOGLE_AUTH_SECRET_KEY')
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE=[
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'openid'
]
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA=['first_name','last_name']
SOCIAL_AUTH_FACEBOOK_KEY=getenv('FACEBOOK_AUTH_KEY')
SOCIAL_AUTH_FACEBOOK_SECRET=getenv('SOCIAL_AUTH_FACEBOOK_SECRET')
SOCIAL_AUTH_FACEBOOK_SCOPE=['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS={
    'fields':'email,first_name,last_name'
}

AUTH_USER_MODEL = "user.UserAccount"
