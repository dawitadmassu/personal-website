"use client";

import "react-vertical-timeline-component/style.min.css";

import React from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Icons } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { educationsData } from "@/lib/data";

export const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: sectionRef } = useSectionInView("Education");

  return (
    <section
      ref={sectionRef}
      id="education"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
    >
      <SectionHeading heading="Education" />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {educationsData.map(({ title, description, location, date }) => (
          <VerticalTimelineElement
            key={title}
            visible={inView}
            contentStyle={{
              background: "hsl(var(--secondary))",
              boxShadow: "none",
              padding: "20px",
            }}
            contentArrowStyle={{ display: "none" }}
            date={date}
            dateClassName="!font-medium text-muted-foreground"
            icon={<Icons.briefcase />}
            iconStyle={{
              boxShadow: "none",
              border: "2px solid hsl(var(--foreground)",
            }}
          >
            <h3 ref={ref} className="font-medium">
              {title}
            </h3>
            <p className="!mt-0 !font-normal">{location}</p>
            <p className="text-muted-foreground !mt-1 !font-normal">
              {description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
