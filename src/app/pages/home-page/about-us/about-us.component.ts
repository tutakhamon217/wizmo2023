import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  ourPurposes = [
    {
      purpose: "Close retail investors' knowledge gap in ESG investing",
      description:
        'by providing ESG-related educational content with consistent and simplified language.',
    },
    {
      purpose: 'Increase financial literacy in retail investors',
      description:
        'by developing learning financial materials and creating a practicing environment with actual companies.',
    },
    {
      purpose:
        "Change retail investors' negative perceptions of ESG investments",
      description:
        'by introducing them to well-performed ESG-focused companies with supported financial and ESG-related data.',
    },
    {
      purpose: 'Minimize the lack of consistent and comparable data',
      description:
        'by collecting ESG-related data and information from three different reliable providers to allow retail investors to create appropriate references.',
    },
  ];
}
