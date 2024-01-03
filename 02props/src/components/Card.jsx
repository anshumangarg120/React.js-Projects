import React from 'react'

function Card({username, text="Canna Kanna"}) {
    return (
        <>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md: dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://media.istockphoto.com/id/1308878974/photo/low-key-portrait-of-a-sad-indian-woman-looking-away-and-thinking-with-a-blank-expression.jpg?s=1024x1024&w=is&k=20&c=CEZ8MlrXCen9H6j9Xi-kl8TI1s1i6Fmd9ZHYDlRR6dg=" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
       {text }
      </div>
    </figcaption>
  </div>
</figure>
</>
    )
}

export default Card

