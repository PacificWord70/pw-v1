document.querySelector('#cs180').addEventListener('click', cs180)
document.querySelector('#cs182').addEventListener('click', cs182)
document.querySelector('#cs240').addEventListener('click', cs240)
document.querySelector('#cs250').addEventListener('click', cs250)
document.querySelector('#cs251').addEventListener('click', cs251)
document.querySelector('#cs252').addEventListener('click', cs252)
document.querySelector('#cs373').addEventListener('click', cs373)
document.querySelector('#cs348').addEventListener('click', cs348)
document.querySelector('#cs354').addEventListener('click', cs354)
document.querySelector('#cs381').addEventListener('click', cs381)
document.querySelector('#cs448').addEventListener('click', cs448)
document.querySelector('#cs471').addEventListener('click', cs471)
document.querySelector('#stat350').addEventListener('click', stat350)
document.querySelector('#stat416').addEventListener('click', stat416)

function cs180() {
    const item = this.parentElement.querySelector('#cs180')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS180 : Problem Solving And Object-Oriented Programming')
    {
        item.innerHTML = 
        `
            <div id="cs180">▸ CS180 : Problem Solving And Object-Oriented Programming
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Problem solving and algorithms,
             implementation of algorithms in a high level programming language, 
            conditionals, the iterative approach and debugging, collections of data, searching and sorting, solving 
            problems by decomposition, the object-oriented approach, subclasses of existing classes, handling exceptions 
            that occur when the program is running, graphical user interfaces (GUIs), data stored in files, abstract 
            data types, a glimpse at topics from other CS courses.</h6>
        `
    } else {
        item.innerHTML='▾ CS180 : Problem Solving And Object-Oriented Programming'
    }  
}

function cs182() {
    const item = this.parentElement.querySelector('#cs182')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS182 : Foundations Of Computer Science')
    {
        item.innerHTML = 
        `
            ▸ CS182 : Foundations Of Computer Science
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Logic and proofs; sets, functions,
             relations, sequences and summations; number representations; 
            counting; fundamentals of the analysis of algorithms; graphs and trees; proof techniques; recursion; 
            Boolean logic; finite state machines; pushdown automata; computability and undecidability.</h6>
        `
    } else {
        item.innerHTML='▾ CS182 : Foundations Of Computer Science'
    }  
}

function cs240() {
    const item = this.parentElement.querySelector('#cs240')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS240 : Programming In C')
    {
        item.innerHTML = 
        `
            ▸ CS240 : Programming In C
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">The UNIX environment, 
            C development cycle, data representation, operators, program structure, 
            recursion, macros, C preprocessor, pointers and addresses, dynamic memory allocation, structures, 
            unions, typedef, bit-fields, pointer/structure applications, UNIX file abstraction, file access, 
            low-level I/O, concurrency.</h6>
        `
    } else {
        item.innerHTML='▾ CS240 : Programming In C'
    }  
}

function cs250() {
    const item = this.parentElement.querySelector('#cs250')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS250 : Computer Architecture')
    {
        item.innerHTML = 
        `
            ▸ CS250 : Computer Architecture
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Digital logic: transistors, gates,
             and combinatorial circuits; clocks; registers and register 
            banks; arithmetic-logic units; data representation: big-endian and little-endian integers; 
            ones and twos complement arithmetic; signed and unsigned values; Von-Neumann architecture and bottleneck; 
            instruction sets; RISC and CISC designs; instruction pipelines and stalls; rearranging code; memory and 
            address spaces; physical and virtual memory; interleaving; page tables; memory caches; bus architecture; 
            polling and interrupts; DMA; device programming; assembly language; optimizations; parallelism; data pipelining.</h6>
        `
    } else {
        item.innerHTML='▾ CS250 : Computer Architecture'
    }  
}

function cs252() {
    const item = this.parentElement.querySelector('#cs252')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS252 : Systems Programming')
    {
        item.innerHTML = 
        `
            ▸ CS252 : Systems Programming
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
        item.innerHTML='▾ CS252 : Systems Programming'
    }  
}

function cs251() {
    const item = this.parentElement.querySelector('#cs251')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS251 : Data Structures And Algorithms')
    {
        item.innerHTML = 
        `
            ▸ CS251 : Data Structures And Algorithms
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">Running time analysis of algorithms and
             their implementations, one-dimensional data structures, trees, 
            heaps, additional sorting algorithms, binary search trees, hash tables, graphs, directed graphs, weighted 
            graph algorithms, additional topics.</h6>
        `
    } else {
        item.innerHTML='▾ CS251 : Data Structures And Algorithms'
    }  
}

function cs373() {
    const item = this.parentElement.querySelector('#cs373')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS373 : Data Mining And Machine Learning')
    {
        item.innerHTML = 
        `
            ▸ CS373 : Data Mining And Machine Learning
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;">This course will introduce students to the
             field of data mining and machine learning, which sits at 
            the interface between statistics and computer science. Data mining and machine learning focuses on developing 
            algorithms to automatically discover patterns and learn models of large datasets. This course introduces 
            students to the process and main techniques in data mining and machine learning, including exploratory data 
            analysis, predictive modeling, descriptive modeling, and evaluation.</h6>
        `
    } else {
        item.innerHTML='▾ CS373 : Data Mining And Machine Learning'
    }  
}

function cs348() {
    const item = this.parentElement.querySelector('#cs348')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS348 : Information Systems')
    {
        item.innerHTML = 
        `
            <v>▸ CS348 : Information Systems
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> File organization and index structures; 
            object-oriented database languages; the relational database model with introductions to SQL and DBMS; 
            hierarchical models and network models with introductions to HDDL, HDML, and DBTG Codasyl; data mining; 
            data warehousing; database connectivity; distributed databases; the client/server paradigm; middleware, i
            ncluding ODBC, JDBC, CORBA, and MOM.</h6>
        `
    } else {
        item.innerHTML='▾ CS348 : Information Systems'
    }  
}

function cs354() {
    const item = this.parentElement.querySelector('#cs354')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS354 : Operating Systems')
    {
        item.innerHTML = 
        `
            <v>▸ CS354 : Operating Systems
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> Introduction to operating systems. 
            Computer system and operating system architectures, processes, inter-process communication, 
            inter-process synchronization, mutual exclusion, deadlocks, memory hierarchy, virtual memory, 
            CPU scheduling, file systems, I/O device management, security.</h6>
        `
    } else {
        item.innerHTML='▾ CS354 : Operating Systems'
    }  
}

function cs381() {
    const item = this.parentElement.querySelector('#cs381')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS381 : The Analysis of Algorithms')
    {
        item.innerHTML = 
        `
            <v>▸ CS381 : The Analysis of Algorithms
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> Introduction to the design 
            and analysis of algorithms. A tentative list of topics includes: sorting and order 
            statistics; common algorithm design techniques, including divide-and-conquer, 
            dynamic programming, and greedy; design and use of data structures; flows and cuts; 
            lower bound techniques; graph algorithms; NP-completeness; randomized algorithms; 
            approximation algorithms. </h6>
        `
    } else {
        item.innerHTML='▾ CS381 : The Analysis of Algorithms'
    }  
}

function cs448() {
    const item = this.parentElement.querySelector('#cs448')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS448 : Relational Database Systems')
    {
        item.innerHTML = 
        `
            <v>▸ CS448 : Relational Database Systems
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> An in-depth 
            examination of relational database systems including theory and concepts as 
            well as practical issues in relational databases. Modern database technologies 
            such as object-relational and Web-based access to relational databases. 
            Conceptual design and entity relationship modeling, relational algebra and 
            calculus, data definition and manipulation languages using SQL, schema and 
            view management, query processing and optimization, transaction management, 
            security, privacy, integrity management. </h6>
        `
    } else {
        item.innerHTML='▾ CS448 : Relational Database Systems'
    }  
}

function cs471() {
    const item = this.parentElement.querySelector('#cs471')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ CS471 : Introduction to Artificial Intelligence')
    {
        item.innerHTML = 
        `
            <v>▸ CS471 : Introduction to Artificial Intelligence
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> Students are 
            expected to spend at least three hours per week gaining experience with artificial 
            intelligence systems and developing software. Basic problem-solving strategies, 
            heuristic search, problem reduction and AND/OR graphs, knowledge representation, 
            expert systems, generating explanations, uncertainty reasoning, game playing, 
            planning, machine learning, computer vision, and programming systems such as 
            Lisp or Prolog. </h6>
        `
    } else {
        item.innerHTML='▾ CS471 : Introduction to Artificial Intelligence'
    }  
}

function stat350() {
    const item = this.parentElement.querySelector('#stat350')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ STAT350 : Introduction To Statistics')
    {
        item.innerHTML = 
        `
            <v>▸ STAT350 : Introduction To Statistics
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> A data-oriented 
            introduction to the fundamental concepts and methods of applied statistics. 
            Exploratory analysis of data. Sample design and experimental design. Probability 
            distributions and simulation. Sampling distributions. The reasoning of statistical 
            inference. Confidence intervals and tests for one and two samples. Inference for 
            contingency tables, regression, and correlation. Introduction to regression with 
            several explanatory variables. Essential use is made of statistical software throughout. </h6>
        `
    } else {
        item.innerHTML='▾ STAT350 : Introduction To Statistics'
    }  
}

function stat416() {
    const item = this.parentElement.querySelector('#stat416')
    console.log(item.innerHTML)
    if(item.innerHTML=='▾ STAT416 : Probability')
    {
        item.innerHTML = 
        `
            <v>▸ STAT416 : Probability
            <h6 style="border-left: 1px solid lightgrey; padding-left: 5pt;"> An introduction 
            to mathematical probability suitable as preparation for actuarial science, 
            statistical theory, and mathematical modeling. General probability rules, conditional 
            probability and Bayes theorem, discrete and continuous random variables, moments 
            and moment generating functions, joint and conditional distributions, standard 
            discrete and continuous distributions and their properties, law of large numbers 
            and central limit theorem.  </h6>
        `
    } else {
        item.innerHTML='▾ STAT416 : Probability'
    }  
}
