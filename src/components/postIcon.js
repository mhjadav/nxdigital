import { graphql } from "gatsby"
import React from "react"
import ClockIcon from "react-icons/lib/fa/clock-o"
import TagIcon from "react-icons/lib/fa/tag"
import OpenIcon from "react-icons/lib/fa/folder-open"


export default ({ node, className = `` }) => (
    <div class="post-meta">
      <span class="post-meta-date">
        <i class="fa fa-clock-o"></i> <span class="day">{node.date}</span>
      </span>
      <span class="post-cat">
        <i class="icon icon-folder"></i>
        {node.categories &&
            node.categories.map(category => (
            <a href="#" key={category.name}>
               {` `}
              {category.name}
            </a>
          ))}
        </span>
    </div>
  )

export const query = graphql`
  fragment PostIcons on wordpress__POST {
    date(formatString: "MMMM DD, YYYY")
  }
`
