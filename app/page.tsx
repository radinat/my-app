import {getFrameMetadata} from "@coinbase/onchainkit";
import {Metadata} from "next";


const frameMetadata = getFrameMetadata({
  buttons: [{label: "Begin"}],
  image: `https://cdn-images-1.medium.com/max/1200/1*mbh9BKzjBefNexUg0f26iw.png`,
  postUrl: `https://my-app-gamma-bice.vercel.app/api/frame?id=1`,


})

export const metadata:Metadata ={
  title: 'Frames KS',
  description: 'A very simple frame',
  openGraph: {
    title: 'Frame KS',
    description: 'A very simple frame',
    images: [`https://cdn-images-1.medium.com/max/1200/1*mbh9BKzjBefNexUg0f26iw.png`]
  },
  other: {
    ...frameMetadata
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className={'text-4xl font-bold tracking-wide'}>Frame KS</h1>

    </main>
  );
}