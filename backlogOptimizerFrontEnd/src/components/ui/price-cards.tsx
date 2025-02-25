/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5TW0IwE8IIl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function PriceCards() {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200">
      <div className="grid gap-4 p-6">
        <h3 className="text-xl font-semibold">Free</h3>
        <p className="text-sm leading-6 text-gray-500">
          That's right! Enjoy free unlimited access. <br/>
          We'll be introducing premium features soon!
        </p>
        <div className="text-4xl font-semibold">$0</div>
        <div className="grid gap-2 text-sm">
          <Feature text="Unlimited game optimizations" />
          <Feature text="View your total optimized cost" />
          <Feature text="View your total optimized time" />
        </div>
      </div>
      <Link to={"/optimizer"}>
        <div className="p-4 border-t grid gap-2">
                <Button className="text-black">Get Started</Button>
        </div>
      </Link>
    </div>
  )
}

// Reusable feature component for cleaner code
function Feature({ text }: { text: string }) {
  return (
    <p className="flex items-center gap-2">
      <CircleCheckIcon className="w-4 h-4" />
      {text}
    </p>
  )
}

import { SVGProps } from "react";

function CircleCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
