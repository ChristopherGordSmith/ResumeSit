# ResumeSit

A personal resume website built with **Blazor WebAssembly**. This project showcases your professional experience, projects, and contact information in a modern, visually striking format.

## Project Overview
ResumeSit is a modular, responsive web application designed to present your resume and portfolio. It leverages Blazor WebAssembly for a fast, interactive user experience and is structured for easy maintenance and extensibility.

## Tech Stack
- **Blazor WebAssembly** (.NET 8)
- **C#** (for models and component logic)
- **Razor Components** (for modular UI)
- **HTML/CSS** (custom and Bootstrap-based)

## Layout Structure
- **MainLayout**: Contains the sidebar navigation and main content area.
- **NavMenu**: Responsive top navigation bar with a mobile drawer toggle.
- **Razor Components**: Used for resume sections, experience, project listings, and contact forms.

## Page Descriptions
- **Home**: Landing page with a brief introduction.
- **Resume**: Displays education, skills, and summary using C# models and Razor components.
- **Projects**: Showcases selected projects with descriptions and links.
- **Experience**: Lists professional experience in a modular format.
- **Contact**: Provides a contact form or contact details.

## Styling Theme
- **Dark Neon Theme**: The site uses a dark background with glowing cyan accents for a modern, high-contrast look.
- **Neon Glow Effects**: Buttons and navigation elements feature neon glow effects for visual emphasis.
- **Responsive Design**: Layout and components adapt to all screen sizes.

## Development Workflow
- **Razor Components**: All major sections are implemented as reusable Razor components.
- **C# Models**: Resume, experience, and project data are defined using C# models for type safety and maintainability.
- **Git Commit Messages**: After each major code change, a descriptive Git commit message is generated summarizing the update.
- **Automatic Build Error Handling**: If build errors occur, they are automatically fixed and explained—no manual troubleshooting required.

## Reference
This README serves as a reference for both the developer and GitHub Copilot during ongoing development. Follow the modular structure and styling guidelines for all new features and updates.