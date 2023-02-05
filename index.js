
// Programa

function horoscopo (){

    let nombreIngresado = prompt ("Ingresa tu nombre");

    let signoIngresado = prompt ("Bienvenido " + nombreIngresado + ". Ingresa tu signo en minusculas, para conocer tu horoscopo de febrero.");

    while (signoIngresado != "ESC"){
        switch (signoIngresado){
            case "aries":
                alert ("Amor: Después de tantas relaciones malas, al fin encontrará al amor de su vida con el que tanto soñó. Prepárese, ya que se enamorará de esa persona sin pensarlo.");
                alert ("Riqueza: Si se encuentra sin trabajo, hoy será un día óptimo para buscar y encontrar un empleo. Por más que no sea del rubro que usted quiere, postúlese.");
                alert ("Bienestar: Prepárese, ya que será un momento excelente para aplicar la expresión artística en su vida. Pruebe incursionando con la música, la literatura y el arte.");
                break;
            case "tauro":
                alert ("Amor: Aunque no quiera y le cueste demasiado necesitará pedirle ayuda a esa persona con la que terminó de muy mala manera. Sepa que otra opción no tendrá.");
                alert ("Riqueza: No dude e invierta en ese proyecto. Sepa que obtendrá resultados exitosos, ya que estará asociado a una persona cercana a usted y de buena procedencia.");
                alert ("Bienestar: Esté atento en esta jornada, ya que recibirá una noticia muy buena que no se esperaba de ninguna manera. Sepa que tendrá una sonrisa de oreja a oreja.");
                break;
            case "geminis":
                alert ("Amor: Deje de ser tan avaro en la vida, especialmente en su relación amorosa. Si tanto quiere a su alma gemela como siempre lo dice, intente sorprenderlo con un regalo especial.");
                alert ("Riqueza: Será un período de celos y envidia en el campo profesional. No se involucre en los comentarios malintencionados de sus compañeros de trabajo.");
                alert ("Bienestar: Intente buscar ayuda con un profesional y así podrá tratar muchos de los secretos que tienen guardados. Sepa que le hará muy bien.");
                break;
            case "cancer":
                alert ("Amor: Aunque le duela el corazón, revea si debe volver con ese amor del pasado. Sepa que tarde o temprano podría descubrir algo que no imaginaba volver a vivir.");
                alert ("Riqueza: Ponga toda su atención en el objetivo que se propuso y así podrá concretarlo. Intente emprender de a un proyecto por vez, no sea impaciente.");
                alert ("Bienestar: Cambie de actitud hacia la gente con la que se relaciona todos los días. Intente mantener conversaciones con sus allegados, no permita que el silencio de adueñe de usted.");
                break;
            case "leo":
                alert ("Amor: Intente pensar si es que quiere realmente a su pareja, de lo contrario, podría surgir un distanciamiento o que el vínculo se tense. Piense bien antes de actuar.");
                alert ("Riqueza: La Luna en su signo hará que su mente este más astuta y detallista. Aproveche para poner en funcionamiento ese proyecto que tiene en espera.");
                alert ("Bienestar: Si se enfrenta con algún inconveniente, tómese el tiempo necesario ya que hace días se encuentra nervioso. Procure oxigenar los pulmones y relajarse.");
                break;
            case "virgo":
                alert ("Amor: Solucione esa situación conflictiva que tuvo con su alma gemela a través de una charla madura. Sepa que son personas grandes para pelearse por algo tan infantil.");
                alert ("Riqueza: Evite ser tan desesperado en los temas que refieren a sus proyectos, ya que podría haber altibajos en los negocios. Relájese, todo llega en el momento justo.");
                alert ("Bienestar: Deje de quejarse que se siente mal y empiece una dieta libre en grasas. Pronto conseguirá un excelente estado físico y su hígado dejará de sufrir.");
                break;
            case "libra":
                alert ("Amor: Piense un poco más en sus intereses, procure dosificar su amor por los demás para luego no sufrir. Fíjese bien a quien le abre su corazón y que le brinda.");
                alert ("Riqueza: En este día, lo más probable es que la comunicación con los demás sea casi imposible. Dedique más atención al modo de expresar sus ideas y verá que se relacionará mejor.");
                alert ("Bienestar: Aunque usted no lo acepte, hace meses que está bastante estresado. Anímese y tome clases de canto por la web, ahí encontrará el camino para soltar sus tensiones.");
                break;
            case "escorpio":
                alert ("Amor: Haga lo posible para reflejar los sentimientos con palabras y demostraciones de afectos. Verá que en poco tiempo el vinculo amoroso mejorará.");
                alert ("Riqueza: Sepa que es momento para empezar a trabajar en grupos. Debería intentar a limitar su individualidad, de esta manera obtendrá excelentes resultados.");
                alert ("Bienestar: Si pretende bajar esos kilitos demás, siga ejercitando como lo viene haciendo hasta ahora. Tenga en cuenta que no debe olvidarse de alimentarse saludablemente.");
                break;
            case "sagitario":
                alert ("Amor: Sentirá cambios notables en la forma que su alma gemela expresará la pasión y la sensualidad. Pregúntele que le está sucediendo y bríndele su apoyo.");
                alert ("Riqueza: Será una jornada muy favorable, ya tendrá que aprovecharla al máximo para repactar una deuda o sellar esos acuerdos económicos. No pierda la oportunidad.");
                alert ("Bienestar: Anímese y acompañe a ese amigo que lo invitará a experimentar esa filosofía o creencia. Sepa que tendrá un efecto muy positivo y le transformará la vida.");
                break;
            case "capricornio":
                alert ("Amor: Prepárese, ya que en esta jornada se relacionará con alguien que lo impactará por sus atractivos. No se niegue y entréguese por completo, ya que vivirá algo maravilloso.");
                alert ("Riqueza: Un cierto estado de indiferencia lo acompañará en el día. Evite cualquier esfuerzo y tómese el tiempo que crea necesario para cumplir con todas sus obligaciones.");
                alert ("Bienestar: Deje de dudar e inicie una actividad corporal que le permita encontrar su propio interior. Anímese y pruebe con el yoga o la meditación.");
                break;
            case "acuario":
                alert ("Amor: Momento para limar todas las asperezas con su entorno social. De esta forma, podrá mejorar día tras día muchas de sus relaciones conflictivas.");
                alert ("Riqueza: Es un momento óptimo para perfeccionarse profesionalmente. Deje de dudar y haga ese curso pago que le regaló su empresa para refinar su intelecto.");
                alert ("Bienestar: Prepárese, ya que su imaginación e intuición estarán desbordadas. Podrá inspirar ideas excelentes. Deje de dudar y póngalas en practica en alguno de sus proyectos.");
                break;
            case "pisis":
                alert ("Amor: Evite ser tan enérgico al decir lo que piensa, ya que podría herir los sentimientos de su alma gemela y terminar distanciado de ella. Piense antes de hablar.");
                alert ("Riqueza: Aunque quiera cumplir con todos sus compromisos, hoy todo parecerá derrumbarse. No es momento para que desespere, ya que de a poco todo se acomodará.");
                alert ("Bienestar: Regálese un tiempo en el día y trate de ver en su interior que es lo que lo está atormentando hace tiempo. Si no puede solo, busque ayuda profesional.");
                break;
            default:
                alert ("no naciste en este planeta")
                break;
        }
        signoIngresado = prompt ("Ingresa un nuevo signo, o ESC para salir.");
    }
}

horoscopo();

//Variables globales - No las pude hacer andar para poner el horoscopo en cada signo, asiq hice la chanchada de ponerlos en cada caso.
