import {getFrameMetadata} from "@coinbase/onchainkit";
import {Metadata} from "next";


const frameMetadata = getFrameMetadata({
  buttons: [{label: "Begin"}],
  image: `https://harlequin-respectable-tiglon-537.mypinata.cloud/ipfs/QmXKheKKQjeJLDiieJc83gMcrCk6m58FjqpQeeiNDsojCh/0.jpg`,
  postUrl: `https://my-app-gamma-bice.vercel.app/api/frame?id=1`,


})

export const metadata:Metadata ={
  title: 'Frames KS',
  description: 'A very simple frame',
  openGraph: {
    title: 'Frame KS',
    description: 'A very simple frame',
    images: [`https://harlequin-respectable-tiglon-537.mypinata.cloud/ipfs/QmXKheKKQjeJLDiieJc83gMcrCk6m58FjqpQeeiNDsojCh/0.jpg`]
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