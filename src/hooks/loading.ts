/*
 * @author: lzj
 * @Date: 2021-03-16 12:18:00
 * @LastEditTime: 2021-03-16 18:41:30
 */

import {useState, useEffect} from 'react'

const requestWithLoading = (request: any): any => {
  const [list, setList] = useState<any>()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (!loading) return
    request.then((res: any) => {
      const { data: { result } } = res
      setList(result)
      setLoading(false)
    })
  }, [])
  return { list, loading, setLoading }
}

export default requestWithLoading
