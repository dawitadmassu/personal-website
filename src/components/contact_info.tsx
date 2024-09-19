import { contactDetails } from "@/lib/data"; // Import your JSON object
import { SectionHeadingSmall } from "./section-heading-sm";

export const ContactInfo = () => (
  <div className="w-full md:w-1/2 md:pr-20">
    <SectionHeadingSmall heading="Contact Information" />
    <ul className="space-y-4 text-sm">
      <li>
        <strong>Email: </strong>
        <a href={`mailto:${contactDetails.email}`} className="underline">
          {contactDetails.email}
        </a>
      </li>
      <li>
        <strong>Phone: </strong>
        <a href={`tel:${contactDetails.phone}`} className="underline">
          {contactDetails.phone}
        </a>
      </li>
      <li>
        <strong>Address: </strong>
        {contactDetails.address}
      </li>
    </ul>

    {/* Embed a simple Google map iframe */}
    <div className="mt-6">
      <iframe
        title="Location"
        src={contactDetails.mapUrl}
        width="100%"
        height="300"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);
