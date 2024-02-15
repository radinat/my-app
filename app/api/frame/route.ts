import {NextRequest, NextResponse} from "next/server";

async function getResponse(req: NextRequest):Promise<NextResponse>  {
    const searchParams = req.nextUrl.searchParams
    const id:any = searchParams.get("id")
    const idAsNumber = parseInt(id)

    const nextId = idAsNumber + 1

    if(idAsNumber === 3){
        return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 5</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://cdn-images-1.medium.com/max/1200/1*mbh9BKzjBefNexUg0f26iw.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta property="fc:frame:button:1" content="Visit page" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="learn how this was made" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="https://my-app-gamma-bice.vercel.app/api/end" />
  </head></html>`);
    } else if(idAsNumber === 0) {
        return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://i.ibb.co/f1S1RrR/2.png" />
   <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="https://my-app-gamma-bice.vercel.app/api/frame?id=${nextId}" />
  </head></html>`);
    } else if(idAsNumber === 1) {
        return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://i.ibb.co/prnbwTK/3.png" />
   <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="https://my-app-gamma-bice.vercel.app/api/frame?id=${nextId}" />
  </head></html>`);
    } else {
        return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://i.ibb.co/KwTtCMX/4.png" />
   <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta property="fc:frame:button:1" content="Final Page" />
    <meta property="fc:frame:post_url" content="https://my-app-gamma-bice.vercel.app/api/frame?id=${nextId}" />
  </head></html>`);
    } 
}

export async function POST(req: NextRequest):Promise<Response> {
    return getResponse(req)
}


//prevents prerendering and  always rendered on the server side, instead of being statically optimized
export const dynamic = 'force-dynamic'