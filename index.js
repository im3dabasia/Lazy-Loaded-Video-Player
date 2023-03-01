const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-video-advertisment", entry.isIntersecting)
        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    })
},
    {
        threshold: 0.5,
        rootMargin: "100px",
    }   
)

const paragraphs = document.getElementsByClassName("para")
console.log(paragraphs)
observer.observe(paragraphs[0])


const paraObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-para", entry.isIntersecting)
        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    })
},
    {
        threshold: 1,
        // rootMargin: "100px",
    }   
)

paragraphs.forEach((para)=>{
    paraObserver.observe(para)
})

