# Intercambio

Intercambio is a language exchange ddapp that is intended to create a marketplace for language learners and language tutors to connect and exchange funds.

# About the project
Intercambio is a full decentralized language tutoring platform.

It is designed to allow anyone to sign up for either a student or a tutor account - with fully functional wallet capabilities using Ether as the native currency.

Like many other language exchange applications on the market, this product facilitates the connection between buyers and sellers: students and tutors. At its most fundamental, language exchange applications achieve four key things: (1) They create and fund student accounts, (2) they create tutor accounts and manage tutor earnings, (3) they verify that students and teachers have had a language exchange meeting, (4) the transfer funds from one student to the tutor after the lesson happens.

In traditional marketplaces companies tend to extract value in the form of commissions often taken at the time of the occurance of the lesson or upon removal of the funds - frontloading the cost to the tutors themselves. For many such tutors, especially those in deprived areas, a normal commission of 15% for language tutoring has a significant impact upon their individual livelihood. This is the primary motivation of Intercambio. 

Medium Post: https://medium.com/@huckleberry.ak.hopper/intercambio-a-ethereum-application-for-language-exchange-b2ab858845a8 

In this way, this project is intended simply to facilitate the exact same processes of traditional language tutoring services without the rent-extraction that has become so common in client-server business models around the world.

# How It Works (aka our good ol' user story)
As a decentralized application, Intercambio simply handles the business logic between buyers and sellers. 

There are only two types of users of this application - both of which have equally important parts to play. Students can create and fund accounts with their public keys. Tutors can do the same. Now, Voila! A student will select a tutor based upon the language they are interested in learning from the tutor's available time-slots. At this point, to provide an incentive for both the student and tutor to attend their lesson, both parties will stake a predetermined amount of ether in escrow until the tutoring lesson occurs. As it stands, the tutor will stake 25% of their rate to and the student will stake the hourly rate for the tutor. Upon scheduling and the inclusion of this transaction on the chain, the student and tutor will have thirty days to complete the lesson. The lesson and stake logic, at this point, only will handle the confirmation of the lesson from a financial perspective and does not integrate (yet) the actual management of the video conversation between the users. Now assuming all goes to plan - that is, the tutor and student skype for an hour to exchange languages - both users will confirm. With a confirmation set, the tutor will call the transfer function and the funds will be withdrawn from escro and deposited into the tutor's account. 

# What This Minimum Viable Product Aims to Achieve

Obviously this solution is not production ready in a number of ways. But that was never the purpose. Instead, this project aims to prove that students and tutors can meet up, securely conduct lessons, and transfer funds all without an intermediary. To me, this application (or marketplace, however you want to percieve it) is at the heart of blockchain applications; that is, value transfer given some set number of conditions (in this case, lesson schedule and lesson confirmed) without needing to pay X% to a third party for handling the transaction. So when you're evaluating my project keep in mind that all it intends to prove is the functionaly. Which, if we really cut everything away, is simply to create fundable accounts, connect buyers with sellers, manage lesson logic, and to transfer funds. Anything beyond that is just marketing. 

I hope you enjoy playing around with it as much as I did making it.


# How to Initialize

Assuming you are using the provided VM(which can be downloaded at: https://drive.google.com/open?id=12vd29ZzLWqbqUBSAvStRPwodcxGxe8r8), then follow these steps: 

1. Open up a terminal and run
	$ ganache-cli
2. Open up another terminal window with ctrl+shift+n and run
	$ cd ~/dev/inter/
	$ truffle compile
	$ truffle migrate
	$ truffle test
	$ npm run dev
3. After firefox and metamask launch, go to the ganache-cli terminal
	a. copy the mnemonic to your clipboard
		(this is most easily done by highlighting and ctrl+shift+c)
4. Go back to firefox and paste the mnemonic into metamask
	a. First click import seed phrase
	b. Then paste using ctrl+v
	c. give it a made up password - 12345678 works fine
5. Then click on metamask and change the network to localhost8545
6. Finally click on the My Account tab to see the current accounts address from metamask.
7. this is the only functionality that currently works. I just so happen to suck as a javascript developer. So... if you want to fully interact with this contr switch to the rinkby network and find it at the following: 

https://oneclickdapp.com/sponsor-baron/

This version is certaintly much more attractive than the front end I am capable of producing as of now. 

## Where to Find Requirement Related Information

Circuit Breaker Pattern: Intercambio.sol line 82 and 124














