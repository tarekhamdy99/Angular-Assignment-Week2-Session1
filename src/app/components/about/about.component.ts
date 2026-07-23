import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITeamMember } from '../../interfaces/about/iteam-member';
import { IAboutStatistics } from '../../interfaces/about/iabout-statistics';
import { IAboutValues } from '../../interfaces/about/iabout-values';
import { IAboutTestimonials } from '../../interfaces/about/iabout-testimonials';
import { IAboutMilestones } from '../../interfaces/about/iabout-milestones';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  teamMembers: ITeamMember[] = [
    {
      name: 'Ahmed Mohamed',
      position: 'CEO & Founder',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      bio: '15+ years of experience in e-commerce and brand management',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Sara Khalid',
      position: 'Marketing Director',
      image:
        'https://images.unsplash.com/photo-1494790108375-be9c2b0c93e7?q=80&w=800&auto=format&fit=crop',
      bio: 'Expert in digital marketing strategies and community building',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Mohamed Ali',
      position: 'Lead Developer',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      bio: 'Full-stack developer specializing in Angular, React, and Node.js',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Nora Youssef',
      position: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
      bio: 'Passionate about creating beautiful and intuitive user experiences',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  stats: IAboutStatistics[] = [
    { number: '50K+', label: 'Happy Customers', icon: 'fa-users' },
    { number: '5K+', label: 'Products', icon: 'fa-boxes' },
    { number: '98%', label: 'Customer Satisfaction', icon: 'fa-star' },
    { number: '24/7', label: 'Support', icon: 'fa-headset' },
  ];

  values: IAboutValues[] = [
    {
      title: 'Quality',
      description: 'We deliver only the best products that meet the highest quality standards',
      icon: 'fa-gem',
    },
    {
      title: 'Trust',
      description: 'Building lasting relationships based on trust with our customers and partners',
      icon: 'fa-handshake',
    },
    {
      title: 'Innovation',
      description:
        'Embracing the latest technologies to provide an exceptional shopping experience',
      icon: 'fa-lightbulb',
    },
    {
      title: 'Sustainability',
      description: 'Committed to sustainable practices to protect our planet',
      icon: 'fa-leaf',
    },
  ];

  testimonials: IAboutTestimonials[] = [
    {
      name: 'Fatima Al-Zahra',
      position: 'Loyal Customer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
      text: 'The best online shopping experience! Authentic products with super fast delivery. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Abdullah Nasser',
      position: 'Graphic Designer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
      text: 'Great shopping experience with an excellent UI. Competitive prices and top-notch quality.',
      rating: 5,
    },
    {
      name: 'Layla Ibrahim',
      position: 'Homemaker',
      image:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=800&auto=format&fit=crop',
      text: 'Love the product variety and easy search functionality. Customer service is outstanding!',
      rating: 5,
    },
  ];

  milestones: IAboutMilestones[] = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started our journey with a big vision to transform online shopping',
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Reached 10,000 customers in our first year',
    },
    { year: '2022', title: 'Regional Expansion', description: 'Opened branches in 5 countries' },
    {
      year: '2023',
      title: 'Excellence Award',
      description: 'Won Best E-commerce Website in the region',
    },
  ];

  handleImageError(event: any) {
    event.target.onerror = null;

    event.target.src = 'assets/images/Not-Personal-Photo-Found.png';
  }
}
