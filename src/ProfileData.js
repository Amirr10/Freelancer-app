import pic3 from './images/pic1.JPG';
import messiPic from './images/messiPic.jpg';
import suarezPic from './images/suarezPic.jpg';
import jenPic from './images/jenPic.jpg';
import tomPic from './images/tomPic.jpg';

const profileData = {
    profiles: [
        {
            fullName:'Daniel Blake',
            title: 'Programmer',
            skill: 'java, c#',
            backgroundPic: jenPic,
        },
        {
            fullName:'John Doe',
            title: 'Data analyst',
            skill: 'SQL, Big Data',
            backgroundPic: tomPic,
        },
        {
            fullName:'Leo Messi',
            title: 'Economist',
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
            fullName:'Tom hann',
            title: 'Data analyst',
            skill: 'Big Data, R',
            backgroundPic: pic3, 
        }
    ]
}

export default profileData;