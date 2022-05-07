import { useCallback, useState } from 'react';

const useToggle = (_default = false) => {

    let [show, setToggle] = useState(false)

    const toggle = useCallback(() => {

        setToggle(old => !old);

    }, [setToggle])

    return [show, toggle, setToggle]
};

export default useToggle;