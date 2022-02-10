## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## How to work on the project

There are two branches ```master``` and ```develop```

The ```master``` branch is continuously integrated into AWS Amplify for deployment to cs340.liamgombart.com.  Deployment is triggered on every commit to master.

The ```develop``` branch is the branch where we work on stuff and make feature branches off of.

We can make as many commits to develop branch as we want.

## Getting ready to deploy

When we are ready to deploy onto our website, we can tag the ```develop``` branch.  Then merge the tag onto the ```master``` branch.

With git commands it looks something like this (change v3.1415 to whatever version we're at):

```
git checkout develop
... doing some awesome coding ...
git add .
git commit -m "some commit before tagging"
git tag -a v3.1415 -m "tag annotation"
git checkout master
git pull origin master
git merge v3.1415
git push origin master
```


Doing commits and merges this way conserves the free tier build minutes on AWS Amplify.  The first 1000 minutes are free.  That sounds like quite a lot, but each deployment to AWS uses about 10 minutes of build time, so there are really on 100 free commits to the ```master``` branch, and 60 minutes have already been used as of this writing.