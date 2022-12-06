
import StoryCard from '../StoryCard/StoryCard'


  // function Stories() {

      const stories = [
        {
          name:'Sonny Sangha',
          src:'/assets/1.png',
          profile:'/assets/3.png',
        },
        {
          name:'Elon Musk',
          src:'/assets/1.png',
          profile:'/assets/7.png',
        },
        {
          name:'Jeff Bongis',
          src:'/assets/5.png',
          profile:'/assets/8.png',
        },
        {
          name:'Mark Zulenburg',
          src:'/assets/2.png',
          profile:'/assets/9.png',
        },
        {
          name:'Bill Gates',
          src:'/assets/1.png',
          profile:'/assets/10.png',
        },
      ];

  //       return (
  //           <div className="flex justify-center space-x-3 mx-auto" >
  //           {stories.forEach(story => {
  //             (
  //             <StoryCard 
  //               name={story.name} 
  //               src={story.src} 
  //               profile={story.profile} 
  //               key={story.src}
  //             />
  //             )
  //           })};
  //         </div>
  //       )
  //   }
    
  function Stories() {
    return (
    <div className="flex justify-center space-x-3 mx-auto" >
      {stories.map((story) => (
      <StoryCard 
              name={story.name} 
              src={story.src} 
              profile={story.profile} 
              key={story.src}
          />)
          )
          }
    </div>
    );
  }
  
  export default Stories

