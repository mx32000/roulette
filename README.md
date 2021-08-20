# Project Overview

## Project Name

Roulette

## Project Description

Roulette is a site where you can get a random book selection from a dynamic, user-maintained database of books. Users can add, edit, or remove books/book info from the database and see a list of all books.

## Wireframes

![mobile wireframe](https://res.cloudinary.com/dcdasnmmz/image/upload/v1629431798/Roulette/mobile_wireframe_t0umeo.png)

![desktop wireframe](https://res.cloudinary.com/dcdasnmmz/image/upload/v1629431782/Roulette/desktop_wireframe_bgupun.png)

## Component Hierarchy

![component hierarchy](https://res.cloudinary.com/dcdasnmmz/image/upload/v1629471250/Roulette/whimsical_component_hierarchy_bkfoza.png)

## API and Data Sample

```json
{
    "records": [
        {
            "id": "rec7S7YH4lUSov5FR",
            "fields": {
                "title": "Goodnight Moon",
                "author": "Margaret Wise Brown",
                "image": "https://syndetics.com/index.aspx?isbn=9780062573094/LC.JPG",
                "genre": "Children's Literature",
                "summary": "Before going to sleep, a little rabbit says goodnight to all of his familiar possessions as his big, green bedroom slowly darkens."
            },
            "createdTime": "2021-08-20T13:39:34.000Z"
        },
        {
            "id": "recAkZrHBK0VAE4Vd",
            "fields": {
                "title": "The Gunslinger (The Dark Tower 1)",
                "author": "Stephen King",
                "genre": "Fantasy",
                "summary": "Roland, the world's last gunslinger, tracks an enigmatic man in black toward a forbidding Dark Tower, fighting forces both mortal and other-worldly on his quest.",
                "image": "https://syndetics.com/index.aspx?isbn=9781501143519/LC.JPG"
            },
            "createdTime": "2021-08-20T13:39:34.000Z"
        },
        {
            "id": "recvUF1ZD4NtGqRcH",
            "fields": {
                "title": "The Clone Codes",
                "author": "Patricia McKissack, Frederick McKissack, John Patrick McKissack",
                "genre": "Science Fiction",
                "summary": "On the run from a bounty hunter who arrested her mother for being part of a secret society devoted to freeing clones, thirteen-year-old Leanna learns amazing truths about herself and her family as she is forced to consider the value of freedom and what it really means to be human in 2170 America.",
                "image": "https://syndetics.com/index.aspx?isbn=9780439929837/LC.JPG"
            },
            "createdTime": "2021-08-20T13:39:34.000Z"
        }
    ]
}
```

### MVP/PostMVP

#### MVP 

- Make get request to Airtable to get the book entries
- Display a random book from the list upon user prompt
- Allow user to view details of a given book entry
- Display all book entries in a All Books tab
- Allow user to add new book entries
- Allow user to edit details from existing book entries
- Allow user to delete existing book entries

#### PostMVP  

- Add the ability to search under the All Books tab
- Create multiple tables for different categories (movies, food, etc)
- Allow user to choose which category they want to get a selection from
- Connect third-party API to offer autofill suggestions when adding new books?

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 19| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 20| Finishing Documentation / Project Approval / Application Structure | Incomplete
|August 23| GET, POST, PUT, and DELETE requests / | Incomplete
|August 24| Form & Database Handling / CSS | Incomplete
|August 25| Responsive Design / MVP / starting PostMVP | Incomplete
|August 26| Final changes / PostMVP | Incomplete
|August 27| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setting up Routes and Links | H | 2hrs| 0hrs | 0hrs |
| Form component | H | 2hrs| 0hrs | 0hrs |
| Menu | H | 3hrs| 0hrs | 0hrs |
| Select random book | H | 1hr| 0hrs | 0hrs |
| Book list | H | 3hrs| 0hrs | 0hrs |
| API Requests | H | 3hrs| 0hrs | 0hrs |
| Handling form field problems | M | 3hrs| 0hrs | 0hrs |
| Handling not enough data | M | 2hrs| 0hrs | 0hrs |
| Total | H | 19hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths: 
Logic 

### Weaknesses: 
Planning, creativity

### Opportunities: 
Learning how to utilize Airtable for personal use

### Threats: 
Getting overwhelmed by deadlines/scope of project - I will try to focus on going task by task instead of thinking about everything that is left to do
