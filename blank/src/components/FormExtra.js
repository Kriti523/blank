/* eslint-disable jsx-a11y/anchor-is-valid */
export default function FormExtra(){
    return(
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remeber-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                </label>

            </div>
            <div className="text-sm">
                <a href="#" className="font-medium text-orange-600 hover:text-orange-300">
                    Forgot your password?
                </a>
            </div>

        </div>
    )
}