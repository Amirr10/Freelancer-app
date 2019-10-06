import pic2 from './images/pic1.JPG';
import messiPic from './images/messiPic.jpg';
import suarezPic from './images/suarezPic.jpg';
import amitPic from './images/amitPic.png';
import yamPic from './images/yamPic.png';

const profileData = {
    profiles: [
        {
            fullName:'Daniel Blake',
            title: 'Programmer',
            skill: 'java, c#',
            backgroundPic: amitPic,
        },
        {
            fullName:'John Doe',
            title: 'Data analyst',
            skill: 'SQL, Big Data',
            backgroundPic: yamPic,
        },
        {
            fullName:'Leo Messi',
            title: 'Economics',
            skill: 'Stock Broker',
            backgroundPic: messiPic,
        },
        {
            fullName:'luis suarez',
            title: 'Programmer',
            skill: 'Go, Unity, Java',
            backgroundPic: suarezPic,
           
        },
        {
            fullName:'Yam Gal',
            title: 'Data analyst',
            skill: 'Big Data, R',
            backgroundPic: pic2,
        }
    ]
}

export default profileData;