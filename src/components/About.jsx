import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="section">
      <h2>About</h2>
      <p className="lead">
        I'm an Enthusiastic Computer Science Engineering graduate specializing in IoT and front-end development. Proficient in HTML5, CSS3, JavaScript and React JS with hands-on experience in building responsive web applications. Eager to contribute to innovative projects and grow within a dynamic software development environment.      </p>
      <motion.div
        className="grid grid-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once:true, amount: .2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}
      >
        {[
          {title:'UI Engineering', text:'Semantic HTML, modern CSS (Grid/Flex), accessibility (WCAG), and responsive layouts.'},
          {title:'React Architecture', text:'Hooks, Context, code-splitting, lazy routes, and reusable component patterns.'},
          {title:'Graphic Designing', text:'Visually Catchy Layout Designs for Branding and Logo Designing '},
          {title:'Tooling', text:'Git, Figma , UI Designs , AI Prompting , VS Code'},
        ].map((card,i)=> (
          <motion.div key={i} className="card" style={{padding:'1.2rem'}} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{ once:true }}>
            <h3 style={{margin:'0 0 .4rem'}}>{card.title}</h3>
            <p className="small">{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
