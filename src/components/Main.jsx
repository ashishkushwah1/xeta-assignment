import React from 'react';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import video2 from '../images/video2.mp4'
import ReactPlayer from 'react-player';
import profile from '../images/profile.jpeg'
import things from '../images/things.jpeg'
import Card from './Card';
import ContactForm from './ContactForm';
import FooterSection from './FooterSection'
import { FiCheckCircle } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
const Main = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-evenly m-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl'>50+</h1>
                    <p className='text-lg p-2'>GYM Enrolled</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl'>250+</h1>
                    <p className='text-lg p-2'>Users enroll</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl'>60+</h1>
                    <p className='text-lg p-2'>Workout Sessions</p>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-5xl'>WHY CHOOSE FITSNAP</h1>
                <p className='text-lg p-2'>GET REALTIME UPDATE WITH AI</p>
            </div>

            <div className="grid grid-cols-2 w-[80%] m-10">
                {/* row1 */}
                <div>
                    <img src={image1} alt="Image 1" className="w-full h-auto" />
                </div>
                <div className="bg-[#7D8DC7] p-4 flex flex-col justify-center items-start text-white h-full">
                    <div className='ml-10'>
                        <h1 className='text-5xl'>Enhanced focus on</h1>
                        <h1 className='text-5xl'>Individual needs</h1>
                    </div>
                    <div className='mt-5 ml-10'>
                        <p>FitSnap: Ditch bad form, embrace perfect</p>
                        <p>workouts. AI analyzes your moves in real-time</p>
                        <p>for flawless fitness.</p>
                    </div>
                </div>

                {/* row2 */}
                <div className="bg-[#5E9ED7] p-4 flex flex-col justify-center items-start text-white h-full">
                    <div className='ml-10'>
                        <h1 className='text-5xl'>Data-Driven</h1>
                        <h1 className='text-5xl'>Insights</h1>
                    </div>
                    <div className='mt-5 ml-10'>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur Lorem ipsum dolor sit</p>
                        <p>amet, consectetur</p>
                    </div>
                </div>
                <div>
                    <ReactPlayer url={video2} playing loop muted width="100%" height="100%" />
                </div>

                {/* row3 */}
                <div>
                    <img src={image2} alt="Image 3" className="w-full h-auto" />
                </div>
                <div className="bg-[#C46DA0] p-4 flex flex-col justify-center items-start text-white h-full">
                    <div className='ml-10'>
                        <h1 className='text-5xl'>Efficient Workouts</h1>
                    </div>
                    <div className='mt-5 ml-10'>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur Lorem ipsum dolor sit</p>
                        <p>amet, consectetur</p>
                    </div>
                </div>

                {/* row4 */}
                <div className="bg-[#69996A] p-4 flex flex-col justify-center items-start text-white h-full">
                    <div className='ml-10'>
                        <h1 className='text-5xl'>Preventing</h1>
                        <h1 className='text-5xl'>Injuries</h1>
                    </div>
                    <div className='mt-5 ml-10'>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur Lorem ipsum dolor sit</p>
                        <p>amet, consectetur</p>
                    </div>
                </div>
                <div>
                    <img src={image3} alt="Image 4" className="w-full h-auto" />
                </div>
            </div>

            <div className='flex flex-col items-center mt-10'>
                <h1 className='font-semibold text-5xl'>LOREM IPSUM</h1>
                <p className='text-lg p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>

            <div className='bg-[#5E9ED7] flex items-center justify-evenly w-[90%] h-[500px] mt-5'>
                <div>
                    <h1 className='text-5xl'>LOREM IPSUM,</h1>
                    <h1 className='text-5xl'>DOLOR SIT AMET,</h1>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xqvCmoLULNY?si=LbD3RKQ38lis92Wp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div className='flex flex-col items-center mt-10'>
                <h1 className='font-semibold text-5xl'>WHAT OUR CLIENTS SAY</h1>
                <h1 className='font-semibold text-5xl'>ABOUT US</h1>
            </div>
            <div className='flex justify-center gap-6 m-10'>
                <Card name="Riya Awasthi" image={profile} description="I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs" />
                <Card name="Riya Awasthi" image={profile} description="I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs" />
                <Card name="Riya Awasthi" image={profile} description="I LOVE the FitSnap. to train my daily exercise, it offers wide range of category that fit my needs" />
            </div>

            <div className='m-5'>
                <h1 className='font-semibold text-5xl'>THINGS YOU NEED</h1>
            </div>

            <div className='relative h-[1000px] w-full'>
                <img src={things} alt="things you need" className='w-full h-full object-cover' />
                <div className="absolute inset-0 bg-white bg-opacity-40"></div>
                <div className="absolute text-white flex items-center space-x-2 top-[120px] left-[307px]">
                    <span className="bg-black bg-opacity-50 px-2 py-1 rounded">Headphones</span>
                    <div className='h-1 w-32 bg-black'></div>
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
                <div className="absolute text-white flex items-center space-x-2 bottom-4 left-[250px]">
                    <span className="bg-black bg-opacity-50 px-2 py-1 rounded">Fitness Band</span>
                    <div className='h-1 w-32 bg-black'></div>
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
                <div className="absolute text-white flex items-center space-x-2 bottom-72 right-[327px]">
                    <span className="bg-black bg-opacity-50 px-2 py-1 rounded">A Tab With FitSnap</span>
                    <div className='h-1 w-32 bg-black'></div>
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='text-9xl font-thin tracking-widest italic'>REVOLUTIONIZE YOU</h1>
                <h1 className='text-6xl p-4 m-10'>LOREM IPSUM</h1>
            </div>
            <div className='flex items-center w-full justify-evenly m-10'>
                <div className='w-1/5 p-10 ml-24 border-blue-700 border-2 rounded-lg'>
                    <p className='flex items-center w-full justify-between p-1'>24*7 AI Trainer<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Unlimited Access<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>150+ Exercise<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Customized Plans<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Advanced AI Camera<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Voice Feedback<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Complete Plans<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Real Time Feedback<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Rep Counter<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Saved Workout Videos<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Activity History<FiCheckCircle /></p>
                    <p className='flex items-center w-full justify-between p-1'>Voice Commands<FiCheckCircle /></p>
                </div>
                <div className='w-1/3'>
                    <p className='text-lg'>To benefits of all the features of FitSnap, the ideal tablet featuring 8GB RAM and an immersive 11-inch screen should offer a balance of performance, display quality  </p>
                    <button className='flex mt-2 items-center text-blue-800 rounded-3xl border-blue-800 mr-10 border-2 pl-3 pr-3 pt-2 pb-2 hover:bg-white'>Download brochure <GoArrowUpRight /></button>
                </div>
            </div>
            <ContactForm />
            <FooterSection />
        </div>
    );
};

export default Main;
