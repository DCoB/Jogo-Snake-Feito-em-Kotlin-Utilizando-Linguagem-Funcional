import org.w3c.dom.HTMLElement
import kotlin.browser.document

fun get(name:String): HTMLElement {
    val e = document.getElementById(name)
    if (e==null) {
        println("Elemento nao encontrado: $name")
    }
    return e as HTMLElement
}
