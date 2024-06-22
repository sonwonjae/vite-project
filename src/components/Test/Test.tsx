import type { PropsWithChildren } from "react"

interface TestProps extends PropsWithChildren {
    test: 'a' | 'b'
}

function Test({ test, children }: TestProps) {
    return <div>test-[{test}] - sonwonjae{children}</div>
}
export default Test