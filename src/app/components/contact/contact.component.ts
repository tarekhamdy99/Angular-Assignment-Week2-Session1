import { Component } from '@angular/core';
import { IContactInfo } from '../../interfaces/contact/icontact-info';
import { IFaqs } from '../../interfaces/contact/ifaqs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactInfo: IContactInfo[] = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      details: '123 Commerce Street, New York, NY 10001, USA',
      link: 'https://maps.google.com',
    },
    {
      icon: 'fa-phone-alt',
      title: 'Call Us',
      details: '+1 (234) 567-8900',
      link: 'tel:+12345678900',
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      details: 'info@yourstore.com',
      link: 'mailto:info@yourstore.com',
    },
    {
      icon: 'fa-clock',
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 9:00 PM',
      link: '#',
    },
  ];

  faqs: IFaqs[] = [
    {
      question: 'How do I place an order?',
      answer:
        "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or login to complete your purchase.",
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days. International shipping times may vary.',
    },
    {
      question: 'What is your return policy?',
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.',
    },
  ];
}
