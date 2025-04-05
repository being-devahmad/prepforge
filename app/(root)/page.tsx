// import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from '@/actions/auth'
// import InterviewCard from '@/components/InterviewCard'
// import { Button } from '@/components/ui/button'
// import { dummyInterviews } from '@/constants'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Home = async () => {

//     const user = await getCurrentUser()

//     // const userInterviews = await getInterviewsByUserId(user?.id!)
//     // const latestInterviews = await getLatestInterviews({ userId: user?.id! })

//     // here is more optimized way of this known by parallel data fetching
//     const [userInterviews, latestInterviews] = await Promise.all([
//         await getInterviewsByUserId(user?.id!),
//         await getLatestInterviews({ userId: user?.id! })
//     ])



//     const hasPassedIntrviews = userInterviews?.length > 0;
//     const hasUpcomingInterviews = latestInterviews?.length > 0;


//     return (
//         <>
//             <section className="card-cta">
//                 <div className="flex flex-col gap-6 max-w-lg">
//                     <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
//                     <p className="text-lg">
//                         Practice real interview questions & get instant feedback
//                     </p>

//                     <Button asChild className="btn-primary max-sm:w-full">
//                         <Link href="/interview">Start an Interview</Link>
//                     </Button>
//                 </div>

//                 <Image
//                     src="/robot.png"
//                     alt="robo-dude"
//                     width={400}
//                     height={400}
//                     className="max-sm:hidden"
//                 />
//             </section>

//             <section className="flex flex-col gap-6 mt-8">
//                 <h2>Your Interviews</h2>
//                 <div className='interviews-section'>
//                     {
//                         hasPassedIntrviews ?
//                             (userInterviews?.map((interview) => (
//                                 <InterviewCard {...interview} key={interview.id} />
//                             ))
//                             ) : (<p>You haven&apos;t taken any interviews yet</p>)
//                     }
//                 </div>

//             </section>

//             <section className="flex flex-col gap-6 mt-8">
//                 <h2>Take Interviews</h2>
//                 {
//                     hasUpcomingInterviews ?
//                         (latestInterviews?.map((interview) => (
//                             <InterviewCard {...interview} key={interview.id} />
//                         ))
//                         ) : (
//                         <p>There are no upcoming interviews available.</p>)
//                 }

//             </section>
//         </>
//     )
// }

// export default Home



import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from '@/actions/auth'

async function Home() {
    const user = await getCurrentUser();

    const [userInterviews, allInterview] = await Promise.all([
        getInterviewsByUserId(user?.id!),
        getLatestInterviews({ userId: user?.id! }),
    ]);

    const hasPastInterviews = userInterviews?.length! > 0;
    const hasUpcomingInterviews = allInterview?.length! > 0;

    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                    <p className="text-lg">
                        Practice real interview questions & get instant feedback
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start an Interview</Link>
                    </Button>
                </div>

                <Image
                    src="/robot.png"
                    alt="robo-dude"
                    width={400}
                    height={400}
                    className="max-sm:hidden"
                />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>

                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))
                    ) : (
                        <p>You haven&apos;t taken any interviews yet</p>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take Interviews</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        allInterview?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))
                    ) : (
                        <p>There are no interviews available</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Home;