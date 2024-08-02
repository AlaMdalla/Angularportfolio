import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',

})

export class ExperiencesComponent {
  events = [
    { year: '2024', details: 'Event details for the year 2024.' },
    { year: '2023', details: 'Event details for the year 2023.' },
    { year: '2022', details: 'Event details for the year 2022.' },
    // Add more events as needed
  ];
}
