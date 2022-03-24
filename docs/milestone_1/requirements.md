---
papersize: a4
geometry:
- margin=1in
...

# Requirements Document for StreamEZ

## Introduction

Over the last few years, subscription based services have become the norm for watching content on the Internet. In the past, most individuals would tune in on cable television to catch their favorite shows as they aired live. Users paid one monthly fee to access hundreds of titles and only paid extra to watch exclusives that were only released in theaters . However, as lives became busier, users no longer had time to tune in live for their content. With advancements in high speed internet, streaming platforms such Netflix and Hulu became popular alternatives. Users no longer had to wait for their shows to air live, they could watch on-demand - wherever they pleased. As more users made the switch from live television to streaming, this led to the birth of other content providers like Disney+, AppleTV, and PrimeVideo each having their own exclusive titles. 

With all the content floating around, it can be difficult finding which subscription service hosts your title. StreamEZ is a web application offering a friendly interface for mapping users to a provider that hosts their queried titles, and provides recommendations on popular shows and movies. This document contains the requirements for StreamEZ and serves as the official reference for development.

This document contains the following: (add more if ya want)

* Executive Summary
* Functional Requirements
* Software Qualities
* Timeline
* Future Changes

## Executive Summary

StreamEZ is looking to change how the world finds and selects its streaming titles. We aim to    make searching for a new title to watch as worry and hassle free as possible. StreamEZ will not only allow a user to query titles, but also provide a hub where they can interact with and find or suggest new titles for other users. We at StreamEZ strongly believe we can provide a service that will take the struggles of not knowing what to binge next away from most people. 
StreamEZ provides the following key features:

* Query Titles – A user can query a title to see an option of streaming services that currently show that title

* View trending / suggested titles – Any user can use the application to retrieve and view detailed descriptions about titles other users are watching.

Two of the most important risks posed by the development of StreamEZ are the following:

* Usability – StreamEZ must be as easy to use as possible, otherwise users would not choose it over just surfing through their streaming services to find the show.

* Rapid development – The schedule according to which StreamEZ will be developed is extremely aggressive to ensure that we have first dibs on getting user feedback. Other qualities cannot be sacrificed as a result of this rapid development.

## Functional Requirements
* Query Titles – A user can query a title to see an option of streaming services that currently show that title

* View trending / suggested titles – Any user can use the application to retrieve and view detailed descriptions about titles other users are watching.

## Software Qualities
 
* User-friendliness – Since users of StreamEZ will be of all sorts and types and not all of them will be very experienced with computers, it is essential that the application be as user-friendly as possible.

* Correctness – Because StreamEZ is investing a lot of time in its Database system, it is imperative that StreamEZ performs correctly and does not show incorrect information about streaming titles.

* Reliability – Reliability of StreamEZ is not expected to be essential, but nonetheless important. Accepted rate of failure is 1 crash biweekly. Increased rate of failure will decimate the impression of the service.

* Performance – It is highly essential that the StreamEZ application runs efficiently. Any “search” should not take more than 2 seconds.

* Reusability – Reusability might be important in this application.

* Extensibility – Over time the system will be enhanced with small features, therefore the application should be extensible.

* Evolvability – Over time, StreamEZ will undergo significant enhancements and changes to new streaming services. As such, the system must be evolvable.

* Robustness – It is expected that the StreamEZ application does not crash if a user inputs wrong data or makes mistakes or if links are broken. 

* Verifiability – The limited schedule may not permit a complete formal verification of the software. However, extensive testing should be performed to ensure reasonable accuracy of the functioning of the system before release.

* Maintainability – StreamEZ will be used by different kinds of users over varying periods of time. Routine maintenance may be necessary at times, hence the system should be easily maintainable.

* Repairability – Since it is possible that the application may not be fault-free, StreamEZ application should be designed and implemented such that it can be easily repaired in the future.

* Safety – StreamEZ is not a critical application that can affect society at large and therefore there is not much concern about safety of the application.

* Portability – Since the StreamEZ application is implemented entirely in JS which is a highly portable programming language itself, portability is of little concern in the design and implementation of the system.

* Understandability – To support evolvability, repairability, and maintainability, it is imperative that all aspects of StreamEZ (design, code and test cases) be easily understandable, even to future developers who are not currently involved in the creation.

* Interoperability – Interoperability is a concern because StreamEZ relies on the existence of currently running APIs.

* Productivity – Productivity is not of a concern for StreamEZ.

* Size – Since it's a web app, size is not a concern. 

* Timeliness – StreamEZ application is not the first of its kind to hit the market. Needless to say, there is competitiveness. Due to this very competitive nature, no deviations from the time schedule will be tolerated.

* Visibility – Visibility is not a concern in the development of StreamEZ.

## Time Schedule

As per client request this application should be completed in ample time (end of the semester). So StreamEZ has conducted a schedule to execute. The schedule is as follows:

Design must be completed by May 1st, 2022 at 12:00 PM. \   
Implementation and module testing must be completed by May 5th, 2022 at 12:00 PM. \   
System testing must be completed by May6th, 2022 at 12:00 PM.\   

## Future Changes
 
* Mobile App Interface – In future versions, StreamEZ may want to make all titles accessible in a mobile app interface.
 
* Advertising products – In future versions, StreamEZ may include advertising to bring in extra revenue by selling the advertising space to other organizations.
 
