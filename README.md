# To setup the website for local development:

git clone https://github.com/YOUR-USERNAME/LockedIn.git
cd LockedIn
npm install
npm run dev

# To deploy updates to the live website on AFS:

# From local machine:

npm run build

# Connect to servers

ssh YOUR-SUNETID@myth.stanford.edu
cd /afs/ir/class/cs147/WWW/projects/AI-in-Classroom/LockedIn

# Back on local machine:

scp -rv dist/\* YOUR-SUNETID@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/AI-in-Classroom/LockedIn

# type in password
