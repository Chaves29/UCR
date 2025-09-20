// Script para publicar automáticamente el contenido del Posteo 1

function parsePostContent(content) {
    const lines = content.split('\n');
    const post = {};
    
    // Extraer metadatos
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('TÍTULO:')) {
            post.title = line.replace('TÍTULO:', '').trim();
        } else if (line.startsWith('CATEGORÍA:')) {
            post.category = line.replace('CATEGORÍA:', '').trim();
        } else if (line.startsWith('AUTOR:')) {
            post.author = line.replace('AUTOR:', '').trim();
        } else if (line.startsWith('ETIQUETAS:')) {
            post.tags = line.replace('ETIQUETAS:', '').trim();
        } else if (line.startsWith('RESUMEN:')) {
            post.excerpt = line.replace('RESUMEN:', '').trim();
        } else if (line.startsWith('CONTENIDO:')) {
            // El contenido empieza después de esta línea
            post.content = lines.slice(i + 1).join('\n').trim();
            break;
        }
    }
    
    return post;
}

function estimateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

function createDefaultPost() {
    const defaultPost = {
        id: 'post-1-fundamentos-curriculo',
        title: 'De las intenciones a la práctica: reflexiones sobre educación, sociedad y currículo desde la experiencia como docente en ciencias',
        category: 'Análisis Curricular',
        author: 'Docente de Ciencias Naturales',
        tags: 'currículo, educación científica, globalización, transformación educativa, práctica docente',
        excerpt: 'Reflexión crítica sobre el primer capítulo de "Fundamentos del currículo" de Zaida Molina Bogantes, analizando los desafíos de la educación contemporánea desde la perspectiva de un docente de ciencias naturales.',
        content: `El primer capítulo de "Fundamentos del currículo" de Zaida Molina Bogantes presenta una radiografía precisa de los desafíos que enfrentamos en la educación contemporánea. Como docente de ciencias, encuentro particularmente relevante la forma en que la autora articula las demandas sociales actuales con la necesidad de transformación curricular, estableciendo un puente conceptual entre las intenciones educativas y su materialización en el aula.

## La educación ante los retos de la sociedad globalizada

Bogantes inicia su análisis reconociendo que "la educación debe responder a nuevos retos que conllevan cambios en todos los aspectos", una premisa que cobra especial significado en la enseñanza de las ciencias. La globalización y la sociedad de la información han transformado radicalmente no solo qué enseñamos, sino cómo nuestros estudiantes acceden y procesan el conocimiento científico.

La reflexión de José Joaquín Brunner, citada por la autora, resulta especialmente pertinente: "el problema para la educación en la actualidad no es dónde encontrar la información sino cómo ofrecer acceso sin exclusiones a ella y, a la vez, enseñar a aprender a seleccionarla, a evaluarla, e interpretarla". En el contexto de la educación científica, esto implica una transformación fundamental del rol docente: de ser transmisores de contenidos científicos a facilitadores del pensamiento crítico y la indagación.

En mi experiencia como docente en ciencias, he observado cómo los estudiantes llegan al aula con información fragmentada obtenida de múltiples fuentes digitales, pero carecen de las herramientas para discriminar entre evidencia científica rigurosa y pseudociencia. Esta realidad válida la preocupación de Bogantes sobre la necesidad de desarrollar "funciones cognitivas superiores" que permitan navegar efectivamente en un "medio saturado de información".

## Las tensiones del siglo XXI en el currículo científico

Los retos específicos que la autora extrae del informe de Delors cobran vida en la práctica educativa diaria. Particularmente relevante es la "tensión entre lo mundial y lo local", que se manifiesta claramente en la enseñanza de las ciencias ambientales. ¿Cómo formamos ciudadanos conscientes del cambio climático global mientras los conectamos con los ecosistemas locales costarricenses? ¿Cómo equilibramos el conocimiento científico universal con el saber tradicional de nuestras comunidades?

La "tensión entre tradición y modernidad" se evidencia en la resistencia que a veces encontramos al incorporar metodologías activas de aprendizaje científico, como la indagación y el aprendizaje basado en problemas, cuando tanto docentes como padres de familia mantienen expectativas más tradicionales sobre la "transmisión" de conocimientos científicos.

## De la concepción a la materialización curricular

La distinción que hace Peñaloza Ramella, citado por Bogantes, entre la "concepción de la educación" y su "materialización" a través del currículo, resulta fundamental para comprender los desafíos de la implementación. En el ámbito científico, esta tensión se vuelve particularmente compleja cuando las intenciones curriculares nacionales promueven la alfabetización científica y el pensamiento crítico, pero las condiciones materiales de muchas instituciones (laboratorios limitados, recursos tecnológicos insuficientes, tiempo de clase restringido) dificultan su implementación efectiva.

La propuesta de Bogantes sobre los tres niveles de concreción curricular (macro, meso y micro) refleja una realidad que vivimos cotidianamente los docentes de ciencias. A nivel macro, los programas oficiales del MEP establecen objetivos ambiciosos relacionados con competencias científicas del siglo XXI. Sin embargo, a nivel micro, en el aula, nos enfrentamos a la necesidad constante de "traducir" estos lineamientos a la realidad específica de nuestros estudiantes y contextos institucionales.

## El docente como agente de transformación curricular

Bogantes enfatiza que "el docente al final debe hacer efectivos los planeamientos curriculares en su práctica pedagógica cotidiana", lo que implica una responsabilidad enorme pero también una oportunidad única de impacto. En la enseñanza de las ciencias, esto significa que somos nosotros quienes determinamos si la educación científica contribuye realmente a formar ciudadanos críticos capaces de tomar decisiones informadas sobre temas científico-tecnológicos que afectan sus vidas.

La experiencia docente me ha mostrado que esta responsabilidad requiere una formación continua no solo en contenidos científicos, sino en pedagogía, tecnología educativa y comprensión del contexto sociocultural de nuestros estudiantes. La "educación a lo largo de la vida" que menciona el informe de Delors no es solo un objetivo para nuestros estudiantes, sino una necesidad imperante para nosotros como educadores.

## Reflexiones hacia una educación científica transformadora

El análisis de Bogantes nos invita a reflexionar sobre si realmente estamos aprovechando el potencial transformador de la educación científica. ¿Estamos formando estudiantes que puedan "dirigir cabalmente su propio desarrollo" en un mundo cada vez más tecnologizado? ¿Nuestras prácticas pedagógicas contribuyen a "disminuir la vulnerabilidad social" de estudiantes de contextos desfavorecidos, o perpetúan brechas en el acceso al conocimiento científico?

La educación científica tiene un rol privilegiado para contribuir al "nuevo humanismo con componente ético esencial" que propone Delors, especialmente en temas como bioética, sostenibilidad ambiental y responsabilidad tecnológica. Sin embargo, esto requiere que superemos la fragmentación tradicional del conocimiento y promovamos una visión más holística e interdisciplinaria de la ciencia.

## Referencias bibliográficas

Bogantes, Z. M. (2018). Fundamentos del currículo. Editorial Universidad Estatal a Distancia (EUNED).`,
        date: new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        readTime: 8
    };
    
    // Obtener posts existentes
    let posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    // Verificar si ya existe un post con el mismo título
    const existingPostIndex = posts.findIndex(p => p.title === defaultPost.title);
    
    if (existingPostIndex !== -1) {
        // Actualizar post existente
        posts[existingPostIndex] = defaultPost;
    } else {
        // Agregar nuevo post al inicio
        posts.unshift(defaultPost);
    }
    
    // Guardar en localStorage
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    console.log('Post 1 guardado en localStorage. Total posts:', posts.length);
    
    // Actualizar la visualización si la función existe
    if (typeof updatePostsDisplay === 'function') {
        console.log('Ejecutando updatePostsDisplay desde createDefaultPost');
        updatePostsDisplay();
    } else {
        console.log('updatePostsDisplay no disponible en createDefaultPost');
    }
    
    console.log('createDefaultPost completado exitosamente');
}

function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        max-width: 300px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        line-height: 1.4;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
}

function createDefaultPost2() {
    const defaultPost2 = {
        id: 'post-2-elementos-curriculo',
        title: 'Los elementos del currículo como sistema integrado: reflexiones desde la enseñanza de las ciencias',
        category: 'Análisis Curricular',
        author: 'Docente de Ciencias Naturales',
        tags: 'currículo, elementos curriculares, sistema educativo, enseñanza científica, integración pedagógica',
        excerpt: 'Análisis del segundo capítulo de "Fundamentos del currículo" de Zaida Molina Bogantes, explorando la arquitectura curricular sistémica y su aplicación en la educación científica.',
        content: `Los elementos del currículo como sistema integrado: reflexiones desde la enseñanza de las ciencias

El capítulo 2 de Bogantes nos presenta una arquitectura curricular compleja y sistémica que trasciende la visión tradicional de elementos aislados. Como docente de ciencias, encuentro particularmente reveladora la clasificación funcional que propone Soto Guzmán, que organiza los componentes curriculares no solo por su naturaleza, sino por el rol que desempeñan en el proceso educativo: orientadores, generadores, reguladores, activadores y multimedios.

## La funcionalidad sistémica de los elementos curriculares

La propuesta de Soto Guzmán resulta especialmente pertinente para comprender cómo los elementos curriculares "interactúan y se apoyan unos a otros" en la práctica educativa. En mi experiencia enseñando ciencias, he observado cómo esta interacción se manifiesta de manera particularmente evidente: los elementos orientadores (objetivos educativos nacionales) se concretan a través de los elementos reguladores (objetivos específicos de ciencias, contenidos científicos programáticos), se materializan mediante los elementos activadores (estrategias metodológicas como la indagación científica), y se enriquecen con los elementos generadores (estudiantes que traen sus concepciones previas sobre fenómenos naturales).

Esta visión sistémica contrasta con enfoques fragmentarios que tratan cada elemento de manera aislada. En la enseñanza de las ciencias, resulta imposible separar artificialmente los contenidos conceptuales de los procedimentales: cuando los estudiantes aprenden sobre fotosíntesis, no solo adquieren conceptos sobre transformación de energía, sino que desarrollan habilidades de observación, formulación de hipótesis y análisis de evidencia.

## Los actores como elementos generadores: Redefiniendo roles

La reconceptualización del papel de los actores educativos que presenta Bogantes adquiere especial relevancia en el contexto científico actual. El alumno como constructor de conocimiento no es solo una propuesta pedagógica, sino una necesidad epistemológica: la ciencia misma es un proceso de construcción social de conocimiento que requiere sujetos activos, críticos y colaborativos.

En mi práctica docente, he experimentado cómo el principio de "aprender a aprender" se vuelve fundamental cuando los estudiantes se enfrentan al acelerado cambio en el conocimiento científico. Los datos que aprenden hoy sobre cambio climático, biotecnología o nanotecnología requieren actualización constante. Por tanto, más que transmitir información, mi rol debe enfocarse en desarrollar competencias científicas transferibles.

El papel del docente como "trabajador de la cultura" cobra una dimensión particular en ciencias. No solo medimos entre la cultura científica global y la cultura local de nuestros estudiantes, sino que debemos ayudarles a comprender cómo el conocimiento científico se relaciona con sus experiencias cotidianas. Cuando estudian ecosistemas, por ejemplo, no solo aprenden taxonomía universal, sino que exploran la biodiversidad de sus propias comunidades y las tensiones entre desarrollo económico local y conservación ambiental.

La incorporación de padres y comunidad como elementos generadores presenta desafíos únicos en ciencias. ¿Cómo incorporar el conocimiento tradicional sobre plantas medicinales sin caer en relativismo científico? ¿Cómo aprovechar las experiencias laborales de padres que trabajan en agricultura o industria sin comprometer el rigor científico? Bogantes nos desafía a encontrar formas de enriquecer el currículo sin diluir la especificidad epistemológica de las ciencias.

## La evolución de los contenidos: Hacia una visión integral del saber

La reconceptualización de los contenidos que presenta la autora, particularmente la tipología de Quesada (conceptuales, procedimentales y actitudinales), refleja una comprensión más sofisticada de lo que significa "saber ciencias" en el siglo XXI.

Los contenidos conceptuales en ciencias han evolucionado desde la memorización de hechos hacia la comprensión de principios y teorías que permitan interpretar el mundo natural. Sin embargo, como docente he observado que muchos estudiantes aún confunden memorizar fórmulas químicas con comprender procesos químicos. La distinción que hace Quesada entre hechos, datos y conceptos es crucial para diseñar experiencias de aprendizaje que trascienden la repetición mecánica.

Los contenidos procedimentales adquieren en ciencias una dimensión epistemológica fundamental. No se trata solo de "saber hacer" experimentos, sino de comprender cómo se construye conocimiento científico válido. Cuando los estudiantes aprenden a controlar variables, están desarrollando no solo una habilidad técnica, sino una competencia metacognitiva sobre la naturaleza del conocimiento científico.

Los contenidos actitudinales en ciencias van más allá de despertar "curiosidad por el mundo natural". Implican desarrollar disposiciones críticas hacia las afirmaciones científicas, sensibilidad ética hacia las implicaciones sociales de la ciencia y tecnología, y compromiso con la sostenibilidad ambiental. En mi experiencia, estos contenidos son los más difíciles de evaluar pero los más determinantes para formar ciudadanos científicamente alfabetizados.

## Tensiones y desafíos en la implementación

La propuesta de Bogantes, aunque conceptualmente sólida, presenta desafíos prácticos significativos. La integración de cultura sistematizada y cotidiana en ciencias requiere un equilibrio delicado. ¿Cómo validamos el conocimiento tradicional sobre fenómenos naturales sin caer en relativismo epistémico? ¿Cómo incorporamos la experiencia cotidiana de los estudiantes con tecnología sin perder el rigor conceptual necesario para comprenderla científicamente?

La participación de la comunidad como elemento generador presenta desafíos únicos en ciencias. Mientras que en otras áreas curriculares la incorporación de saberes comunitarios puede ser más directa, en ciencias debemos mediar entre diferentes formas de conocimiento manteniendo la especificidad del método científico.

## Los objetivos como elementos reguladores: más allá de las competencias

La evolución de los objetivos desde "conductas finales" hacia competencias que "se van desarrollando en cada alumno de acuerdo con su propio ritmo" refleja una comprensión más sofisticada del aprendizaje científico. Sin embargo, en mi experiencia, esto requiere un cambio fundamental en las prácticas evaluativas. ¿Cómo evaluamos competencias científicas en desarrollo sin recurrir a mediciones estandarizadas que contradicen la individualización propuesta?

Las funciones de los objetivos que presenta Quesada adquieren especial relevancia en ciencias, donde la complejidad conceptual y procedimental requiere orientación clara tanto para docentes como estudiantes. Los objetivos no solo deben "dirigir la enseñanza", sino ayudar a los estudiantes a autorregular su aprendizaje científico.

El análisis de Bogantes nos desafía a superar visiones fragmentarias del currículo. En ciencias, esto implica reconocer que enseñar conceptos científicos de manera aislada de los procesos, actitudes y contextos culturales empobrece la experiencia educativa y limita el desarrollo de competencias científicas auténticas.

La interacción sistémica de los elementos requiere de docentes con una comprensión profunda no solo de los contenidos científicos, sino de cómo estos se relacionan con los objetivos formativos, las características de los estudiantes, las expectativas comunitarias y las posibilidades metodológicas. Esto implica un nivel de profesionalización docente que trasciende el dominio disciplinar tradicional.

## Referencias bibliográficas

Bogantes, Z. M. (2018). Fundamentos del currículo. Editorial Universidad Estatal a Distancia (EUNED).`,
        date: new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        readTime: 9
    };
    
    // Obtener posts existentes
    let posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    // Verificar si ya existe un post con el mismo título
    const existingPostIndex = posts.findIndex(p => p.title === defaultPost2.title);
    
    if (existingPostIndex !== -1) {
        // Actualizar post existente
        posts[existingPostIndex] = defaultPost2;
        console.log('Post 2 actualizado');
    } else {
        // Agregar nuevo post al inicio
        posts.unshift(defaultPost2);
        console.log('Post 2 agregado');
    }
    
    // Guardar en localStorage
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    console.log('Post 2 guardado en localStorage. Total posts:', posts.length);
    
    // Actualizar la visualización si la función existe
    if (typeof updatePostsDisplay === 'function') {
        console.log('Ejecutando updatePostsDisplay desde createDefaultPost2');
        updatePostsDisplay();
    } else {
        console.log('updatePostsDisplay no disponible en createDefaultPost2');
    }
    
    console.log('createDefaultPost2 completado exitosamente');
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM cargado, iniciando posts...');
        // Limpiar localStorage para forzar recarga
        localStorage.removeItem('blogPosts');
        createDefaultPost();
        createDefaultPost2();
        
        // Verificar posts cargados
        setTimeout(() => {
            const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
            console.log('Posts en localStorage:', posts.length);
            posts.forEach((post, index) => {
                console.log(`Post ${index + 1}: ${post.title}`);
            });
        }, 1000);
    });
} else {
    console.log('DOM ya cargado, iniciando posts...');
    // Limpiar localStorage para forzar recarga
    localStorage.removeItem('blogPosts');
    createDefaultPost();
    createDefaultPost2();
    
    // Verificar posts cargados
    setTimeout(() => {
        const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        console.log('Posts en localStorage:', posts.length);
        posts.forEach((post, index) => {
            console.log(`Post ${index + 1}: ${post.title}`);
        });
    }, 1000);
}