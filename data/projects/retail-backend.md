---
weight: 300
title: Retail Backend Built with Node.js
slug: retail-backend
liveLink: https://ancient-basin-34337.herokuapp.com/login
infoLink: retail-backend
image: /images/projects/retail-backend.png
warning: This app is hosted on a free server! Please allow some time for the server to wake up (up to 30 seconds) when first visiting.
details: Old backend project built for fun.
features:
  - name: Add, update, and delete products
    description: Basic CRUD operations for products to be sold.
  - name: Add, update, and delete customers
    description: Basic CRUD operations for customers.
  - name: Add, update, and delete users
    description: Basic CRUD operations for users allowing access control.
  - name: Add, update, and delete orders
    description: Basic CRUD opertaions allowing manual updates of problem orders.
  - name: Place orders through retailer templates
    description: Retail site templates can query the backend or product information including prices to display an order.
  - name: Run Payments for Orders
    description: Can initiate a payment on the retail site or on backend. Orders must be approved before payment is captured.
  - name: Review and approve orders
    description: Allows quality assurance to take place. Also shows up in the order status.
  - name: Print postage for orders
    description: When an order is ready to be dispatched. Postage can be printed from the backend. Only warehouse or admin type users can print postage.
  - name: Track orders
    description: Order tracking can be done through order Ids
  - name: Keep track order order statuses
    description: Will return printable postage as a pdf that would be printable and usable if it wasnt connected to a sandbox API.
  - name: order tracking through order IDs
    description: Orders can be tracked based on a givent order ID
languages:
  - name: Javascript
    description: Used for client and server
  - name: Node
    description: Used for backend
  - name: Express
    description: Handles all routes and CRUD operations for the different entities in this project.
  - name: MongoDB
    description: Database for storage of all entities involved.
  - name: Mongoose
    description: Used in conjunction with Node/Express to update database entries.
  - name: Bootstrap
    description: Thrown in for some really simple styles
  - name: Angular
    description: Used for the frontend UI to make calls to the backend
  - name: Postmaster
    description: Node module used to make calls to postmaster for postage on the backend.
  - name: Stripe
    description: Used for payment pre-auth, and payment capture.
---

## Super Old Project
This is another super old project that I built 5+ years ago when I was first becoming interested in Node and AngularJS. Regardless it is actually kind of cool. It manages sellable products, hooks into stripe API, prints postage for shipping products, and serves up product data for multiple retail sites. Could in theory be used for some sort of an affiliate program.