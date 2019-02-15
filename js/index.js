document.querySelector('#cs180').addEventListener('click', cs180)
document.querySelector('#cs182').addEventListener('click', cs182)
document.querySelector('#cs240').addEventListener('click', cs240)
document.querySelector('#cs250').addEventListener('click', cs250)
document.querySelector('#cs251').addEventListener('click', cs251)
document.querySelector('#cs252').addEventListener('click', cs252)
document.querySelector('#cs373').addEventListener('click', cs373)
document.querySelector('#cs348').addEventListener('click', cs348)

function cs180() {
    const item = this.parentElement.querySelector('#cs180')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS180 : Problem Solving And Object-Oriented Programming</li>')
    {
        item.innerHTML = 
        `
            <li id="cs180">▸ CS180 : Problem Solving And Object-Oriented Programming</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Problem solving and algorithms,
             implementation of algorithms in a high level programming language, 
            conditionals, the iterative approach and debugging, collections of data, searching and sorting, solving 
            problems by decomposition, the object-oriented approach, subclasses of existing classes, handling exceptions 
            that occur when the program is running, graphical user interfaces (GUIs), data stored in files, abstract 
            data types, a glimpse at topics from other CS courses.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS180 : Problem Solving And Object-Oriented Programming</li>'
    }  
}

function cs182() {
    const item = this.parentElement.querySelector('#cs182')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS182 : Foundations Of Computer Science</li>')
    {
        item.innerHTML = 
        `
            <li>▸ CS182 : Foundations Of Computer Science</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Logic and proofs; sets, functions,
             relations, sequences and summations; number representations; 
            counting; fundamentals of the analysis of algorithms; graphs and trees; proof techniques; recursion; 
            Boolean logic; finite state machines; pushdown automata; computability and undecidability.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS182 : Foundations Of Computer Science</li>'
    }  
}

function cs240() {
    const item = this.parentElement.querySelector('#cs240')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS240 : Programming In C</li>')
    {
        item.innerHTML = 
        `
            <li>▸ CS240 : Programming In C</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">The UNIX environment, 
            C development cycle, data representation, operators, program structure, 
            recursion, macros, C preprocessor, pointers and addresses, dynamic memory allocation, structures, 
            unions, typedef, bit-fields, pointer/structure applications, UNIX file abstraction, file access, 
            low-level I/O, concurrency.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS240 : Programming In C</li>'
    }  
}

function cs250() {
    const item = this.parentElement.querySelector('#cs250')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS250 : Computer Architecture</li>')
    {
        item.innerHTML = 
        `
            <li>▸ CS250 : Computer Architecture</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Digital logic: transistors, gates,
             and combinatorial circuits; clocks; registers and register 
            banks; arithmetic-logic units; data representation: big-endian and little-endian integers; 
            ones and twos complement arithmetic; signed and unsigned values; Von-Neumann architecture and bottleneck; 
            instruction sets; RISC and CISC designs; instruction pipelines and stalls; rearranging code; memory and 
            address spaces; physical and virtual memory; interleaving; page tables; memory caches; bus architecture; 
            polling and interrupts; DMA; device programming; assembly language; optimizations; parallelism; data pipelining.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS250 : Computer Architecture</li>'
    }  
}

function cs252() {
    const item = this.parentElement.querySelector('#cs252')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS252 : Systems Programming</li>')
    {
        item.innerHTML = 
        `
            <li>▸ CS252 : Systems Programming</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Low-level programming; review of addresses,
             pointers, memory layout, and data representation; text, data, 
            and bss segments; debugging and hex dumps; concurrent execution with threads and processes; address spaces; 
            file names; descriptors and file pointers; inheritance; system calls and library functions; standard I/O and 
            string libraries; simplified socket programming; building tools to help programmers; make and make files; 
            shell scripts and quoting; unix tools including sed, echo, test, and find; scripting languages such as awk; 
            version control; object and executable files (.o and a.out); symbol tables; pointers to functions; hierarchical 
            directories; and DNS hierarchy; programming embedded systems.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS252 : Systems Programming</li>'
    }  
}

function cs251() {
    const item = this.parentElement.querySelector('#cs251')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS251 : Data Structures And Algorithms</li>')
    {
        item.innerHTML = 
        `
            <li>▸ CS251 : Data Structures And Algorithms</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Running time analysis of algorithms and
             their implementations, one-dimensional data structures, trees, 
            heaps, additional sorting algorithms, binary search trees, hash tables, graphs, directed graphs, weighted 
            graph algorithms, additional topics.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS251 : Data Structures And Algorithms</li>'
    }  
}

function cs373() {
    const item = this.parentElement.querySelector('#cs373')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS373 : Data Mining And Machine Learning</li>')
    {
        item.innerHTML = 
        `
            <li>▸ CS373 : Data Mining And Machine Learning</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">This course will introduce students to the
             field of data mining and machine learning, which sits at 
            the interface between statistics and computer science. Data mining and machine learning focuses on developing 
            algorithms to automatically discover patterns and learn models of large datasets. This course introduces 
            students to the process and main techniques in data mining and machine learning, including exploratory data 
            analysis, predictive modeling, descriptive modeling, and evaluation.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS373 : Data Mining And Machine Learning</li>'
    }  
}

function cs348() {
    const item = this.parentElement.querySelector('#cs348')
    console.log(item.innerHTML)
    if(item.innerHTML=='<li>▾ CS348 : Information Systems</li>')
    {
        item.innerHTML = 
        `
            <li>▸ CS348 : Information Systems</li>
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> File organization and index structures; 
            object-oriented database languages; the relational database model with introductions to SQL and DBMS; 
            hierarchical models and network models with introductions to HDDL, HDML, and DBTG Codasyl; data mining; 
            data warehousing; database connectivity; distributed databases; the client/server paradigm; middleware, i
            ncluding ODBC, JDBC, CORBA, and MOM.</h6>
        `
    } else {
        item.innerHTML='<li>▾ CS348 : Information Systems</li>'
    }  
}