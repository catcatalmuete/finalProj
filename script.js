let content;
let soundtrackBlock;

let Posts = [
	{
        "profileName1": "lisarose",
        "profileName2": "Child Mind Institute",
        "link": "https://childmind.org/article/how-using-social-media-affects-teenagers/",
        "image1": "inf1-1.jpeg",
        "image2": "inf1-2.jpeg",
        "likeCount": 1306,
		"caption1": "Take me back to Paradise! #trippinwithtarte #lisatravels #throwback",
        "caption2": "A survey conducted by the Royal Society for Public Health asked 14-24 year\
        olds in the UK how social media platforms impacted their health and wellbeing. The survey\
        results found that Snapchat, Facebook, Twitter and Instagram all led to increased feelings\
        of depression, anxiety, poor body image and loneliness."        
	},
	{
        "profileName1": "malakhusk",
        "profileName2": "Columbia School of Public Health",
        "link": "https://www.publichealth.columbia.edu/public-health-now/news/social-media-and-mental-health-what-we-know-so-far",
        "image1": "inf2-1.jpeg",
        "image2": "inf2-2.png",
        "likeCount": 2734,
		"caption1": "Blue-eyed twin flames #mansbestfriend #dogsofinstagram #puppylove",
        "caption2": "Although there are important benefits, social media can also provide platforms\
         for bullying and exclusion, unrealistic expectations about body image and sources of\
         popularity, normalization of risk-taking behaviors, and can be detrimental to mental health."       
	},
	{
        "profileName1": "jessjjones",
        "profileName2": "Pew Research Center",
        "link": "https://www.pewresearch.org/internet/2018/11/28/teens-and-their-experiences-on-social-media",
        "image1": "inf3-1.jpeg",
        "image2": "inf3-2.jpeg",
        "likeCount": 1758,
		"caption1": "Never a dull moment with these two! Champagne for days! #triplets",
        "caption2": "About four-in-ten teens (38%) say they have felt overwhelmed by the drama they\
        see on social media, while roughly three-in-ten (31%) say it’s made them feel excluded by\
        their friends."       
	},
	{
        "profileName1": "chlomoney",
        "profileName2": "Verywell Mind",
        "link": "https://www.verywellmind.com/social-media-and-body-image-4157373",
        "image1": "inf4-1.jpeg",
        "image2": "inf4-2.jpeg",
        "likeCount": 1182,
		"caption1": "Just finished Day 10 of my 30 day yoga challenge in the beauty of nature!\
        #yogaeverydamnday",
        "caption2": "Girls as young as 5 start to experience increased body dissatisfaction\
        and by the time they are adolescents, children have often internalized what media says about\
        what boys and girls should look like. For girls, this can lead to self-objectification, or\
        believing their appearance matters more than other internal qualities. This is related to\
        lower body esteem, body shame, anxiety, and depression."       
	},
    {
        "profileName1": "mattoliver",
        "profileName2": "Big Think",
        "link": "https://bigthink.com/stephen-johnson/social-media-mental-health",
        "image1": "inf5-1.png",
        "image2": "inf5-2.jpeg",
        "likeCount": 2416,
		"caption1": "The long awaited New York Fashion Week vlog is now available on my YouTube\
        channel! Link in bio! #newyorkfashionweek",
        "caption2": "A recent study published in Eating and Weight Disorders looked at the relationship\
        between screen use and the symptoms of muscle dysmorphia — a type of body dysmorphic disorder\
        in which someone believes themselves to be weak even if they are fit and healthy. The researchers\
        found that muscle dysmorphia symptoms were associated with increased screen time. Among young\
        men specifically, greater time texting and on social media correlated with greater symptoms."       
	},
];

function createPage() {
	content = document.getElementById('content');
    let counter = 0;

	for (let post of Posts) {
		postBlock = document.createElement('div');
		postBlock.className = 'postBlock'; 
        if (counter == 0 || counter == 3) {
            postBlock.setAttribute('data-aos', 'zoom-in-left');
        } else if (counter == 1 || counter == 4) {
            postBlock.setAttribute('data-aos', 'zoom-in-right');
        } else {
            postBlock.setAttribute('data-aos', 'zoom-in-up');
        }

        //Profile Bar
        let profile = document.createElement('div');
		profile.className = 'profile';

        let profilePic = document.createElement('img');
		profilePic.className = 'profilePic';
        profilePic.src = "happy.png";
        //Check if post is hovered and change profilePic to sad.png if true
        postBlock.addEventListener('mouseover', function() {
            profilePic.src = "sad.png";
        });
        postBlock.addEventListener('mouseleave', function() {
            profilePic.src = "happy.png";
        });

        let profileName = document.createElement('a');
		profileName.textContent = post.profileName1;
        //Check if post is hovered and change profileName if true
        postBlock.addEventListener('mouseover', function() {
            profileName.textContent = post.profileName2;
            profileName.href = post.link;
        });
        postBlock.addEventListener('mouseleave', function() {
            profileName.textContent = post.profileName1;
        });

        profile.appendChild(profilePic);
        profile.appendChild(profileName);
        postBlock.appendChild(profile);

        //Picture
		let picture = document.createElement('img');
		picture.className = 'picture';
		picture.src = post.image1;
	    postBlock.appendChild(picture);

        //Check if post is hovered and change picture if true
        postBlock.addEventListener('mouseover', function() {
            picture.src = post.image2;
        });
        postBlock.addEventListener('mouseleave', function() {
            picture.src = post.image1;
        });

        //Like Heart
        let heart = document.createElement('img');
        heart.className = 'heart';
        heart.src = "unlike.png";
        postBlock.appendChild(heart);

        //Like and Unlike
        heart.addEventListener('click', function() {
            if (heart.classList.contains('liked')) {
                // Unlike
                heart.src = "unlike.png";
                heart.classList.toggle('liked');
                post.likeCount--;
                likeCount.textContent = post.likeCount + " likes";
            } else {
                // Like
                heart.src = "like.png";
                heart.classList.toggle('liked');
                post.likeCount++;
                likeCount.textContent = post.likeCount + " likes";
            }
        });

        //Like Count
        let likeCount = document.createElement('h1');
        likeCount.textContent = post.likeCount + " likes";
        likeCount.className = 'likeCount';
        postBlock.appendChild(likeCount);

        //Caption
        let captionName = document.createElement('h2');
		captionName.textContent = post.profileName1;
        captionName.className = 'captionName';
        //Check if post is hovered and change captionName if true
        postBlock.addEventListener('mouseover', function() {
            captionName.textContent = post.profileName2;
        });
        postBlock.addEventListener('mouseleave', function() {
            captionName.textContent = post.profileName1;
        });

        let captionText = document.createElement('h2');
		captionText.textContent = post.caption1;
        captionText.className = 'captionText';
        //Check if post is hovered and change captionText if true
        postBlock.addEventListener('mouseover', function() {
            captionText.textContent = post.caption2;
        });
        postBlock.addEventListener('mouseleave', function() {
            captionText.textContent = post.caption1;
        });

        postBlock.appendChild(captionName);
        postBlock.appendChild(captionText);

		content.appendChild(postBlock);
        counter++;
	}
}

createPage(); 
AOS.init();