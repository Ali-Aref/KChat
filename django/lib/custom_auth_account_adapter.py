from allauth.account.adapter import DefaultAccountAdapter
from allauth.account.forms import EmailAwarePasswordResetTokenGenerator
import random


class CustomAccountAdapter(DefaultAccountAdapter):
    """
    Customize the account adapter for allauth
    """

    def generate_email_verification_code(self) -> str:
        return str(random.randint(100000, 999999))


class CustomEmailAwarePasswordResetTokenGenerator(
    EmailAwarePasswordResetTokenGenerator
):
    pass
