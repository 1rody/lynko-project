'use client' 

export default function Selector() {
    return (
        <nav className="h-screen w-200 flex flex-col">
            <section>
                <p>
                    Theme
                </p>
                <ol>
                    <li><button>Dark</button></li>
                    <li><button>Dark</button></li>
                </ol>
            </section>
            <section>
                <p>
                    Information
                </p>
                <div id="content">
                    <input type="text" name="username" id="username" />
                    <input type="text" name="pronoums" id="pronoums" />
                    <textarea name="description" id="description" />
                </div>
            </section>
        </nav>
    )
}