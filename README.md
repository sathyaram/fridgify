# Fridgify

Welcome to Fridgify, an online refridgerator where you can inventory what's in your actual fridge.

## Overview

This is Fridgify, your one stop spot for what's in your fridge. Have you ever been at a party and wanted to know if you had Kraft singles in your fridge to make grilled cheese when you get home? Well now you will! With Fridgify, you'll have a visual fridge interface to add the name and expiration date of anything in your fridge, and categorize them by food group and location within your fridge or freezer. You'll never forget when you left that slice of ham again! 

### Features
- Create, update, or delete Items with Name, Exp. Date, Categories and Fridge location
- See groupings of what is where in your fridge
- All content that is created/saved shows up immediately, without page refresh
- Application is responsive and usable on mobile

### Schemas

- Item
  - Name
  - Exp. Date
  - Category
  - Fridge Location

- Category
  - Name
  - [Item]

### Technologies
- HTML
- CSS
- Javascript
- Express
- Mongoose
- React
- React Router
- Bodyparser
- Node
- Axios