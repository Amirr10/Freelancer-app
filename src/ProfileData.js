import pic1 from './images/pic1.JPG';
import messiPic from './images/messiPic.jpg';
import suarezPic from './images/suarezPic.jpg';
import amitPic from './images/amitPic.png';
import yamPic from './images/yamPic.png';

const profileData = {
    profiles: [
        {
            fullName:'Daniel Blake',
            skills: 'Programmer',
            about: 'java, c#',
            backgroundPic: amitPic,
        },
        {
            fullName:'John Doe',
            skills: 'Data analyst',
            about: 'SQL, Big Data',
            backgroundPic: yamPic,
        },
        {
            fullName:'Leo Messi',
            skills: 'Economics',
            about: 'Stock Broker',
            backgroundPic: messiPic,
        },
        {
            fullName:'luis suarez',
            skills: 'Programmer',
            about: 'Go, Unity, Java',
            backgroundPic: suarezPic,
           
        },
        {
            fullName:'Yam Gal',
            skills: 'Data analyst',
            about: 'Big Data, R',
            backgroundPic: pic1,
        }
    ]
}

export default profileData;