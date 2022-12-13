# FQ Computer Store

> This project is the frontend of this backend project: [uade-ai-tp-backend](https://github.com/JuanQP/uade-ai-tp-backend)

**PC components store web page**

This is a *remake* of an old university project. I have built the frontend from scratch having some inspiration in GameStop web page.

Why did I make this frontend from scratch? Because the previous one was a mess 😅, and I decided to make it again cleaner, simpler, dockerized and self-contained (without having Cloudinary as a dependency for example).

The backend for this university project was also modified: I added TypeScript to it, and made some minor changes but I wanted to keep the same implementation in the backend (which is also a little bit messy).

Because this is not a monorepo, I've made a docker-compose file to build frontend, run backend and a database.

## I just want to see the app

You only need to build this repo, don't *docker run* it, just build it:

```sh
docker build -t uade-ai-tp:1.0.0 .
```

You are almost done, now you have to run the backend which will serve the built react app. [Clone the backend repo](https://github.com/JuanQP/uade-ai-tp-backend) in another folder, and then run in that backend folder:

```sh
docker-compose up -d
docker-compose exec backend /bin/sh -c "npm run db:seed"
```

That's it. Visit the page in http://localhost:4000 and login with the client user `inewton@uade.edu.ar` or admin user `juanquinteros@uade.edu.ar`. In both cases the password is `A$d12345`.

## Development

[First run backend and db](https://github.com/JuanQP/uade-ai-tp-backend).

Then, you can run this project with:

```sh
npm install
npm run dev
```

## The app

![1](https://user-images.githubusercontent.com/11776905/207327731-b46705e8-bc82-4303-865f-afa1ba6a54ba.png)

![2](https://user-images.githubusercontent.com/11776905/207327736-98c92450-66b9-43e7-94ae-f3efd6aa8984.png)

![3](https://user-images.githubusercontent.com/11776905/207327743-648416b1-68e9-4eb7-9b37-100ed3db800e.png)

![4](https://user-images.githubusercontent.com/11776905/207327745-d6a474ff-9ff0-41ec-af84-23deba025e65.png)

![5](https://user-images.githubusercontent.com/11776905/207327748-2886520b-b3a3-462b-b344-3543208e76ad.png)
