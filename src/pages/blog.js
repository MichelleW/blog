import { Link } from "gatsby";
import * as React from "react"
import './blog.css';
export default function Component () {
  return (
    <div className="blog">
      <Link to="/"><i class="fab fa-arrow-circle-left" aria-hidden="true"></i> Back Home</Link>
      <h2>Coming Soon!</h2>
    </div>
  )
}
 