import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
  const data = [
    {
      id: 1,
      name: 'Rahim Molla',
      work: 'Student',
      des: 'I am quite happy to find such kind of guide who helped me during my immigration process as a friend. Keep it up brother. I highly recommend that service for those who want visa service.',
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'John Dullu',
      work: 'Traveler',
      des: 'I am a traveler. So I have to do visa nearly every month with my job. This service is quite good as I donot have to think about the pain. Thank your for your help. I wish your better future.',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Kulsum Begum',
      work: 'House Wife',
      des: 'I was a patient. I had to go out side of the country for better treatment. This guy helped me a lot. In this situation, I just do not have to think about visa at all.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'Jakir Islam',
      work: 'Businessman',
      des: 'I am a small businessman. I have to go may country nearly every week. But I can not afford a lot of money. This service helped me out in this matter. I appreciate his dedication.',
      img: 'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-center text-4xl text-red-500  mt-10 mb-5 font-bold hover:text-red-600">
        <span className="border-b-4 border-red-600 ">Reviews Corner</span>
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              My Honorable Client Reviews
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            The task of giving proper advice about visa and travel is hard and
            managing those things is mostly painful. But I had overcome all of
            the problems and gave my 100% effort to make my clients happy. Let's
            see what they said about me...
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((opinion) => (
            <Review key={opinion.id} opinion={opinion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
