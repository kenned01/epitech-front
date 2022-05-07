import { Button } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { deleteBook } from '../../Providers/BookProvider';

export const useBooks = (setBooks, setOneBook, toggleEdit) => {

    const _deleteBook = useCallback((id) => {
        deleteBook(id, setBooks)
    }, [setBooks])

    const _editBook = useCallback((book) => {
        setOneBook(book)
        toggleEdit()
    }, [setOneBook, toggleEdit])

    const renderColumn = useMemo(() => ([
        {title: "Id", dataIndex: 'id', key:'id'},
        {title: "Title", dataIndex: "title", key: "title"},
        {title: "Description", dataIndex: "description", key: "description"},
        {title: "Author", dataIndex: "author", key: "author"},

        {
            title: 'Action', 
            key: 'action', 
            render: (_, record) => {
                return <>
                    <Button onClick={() => _editBook(record)} type='text' style={{color: "orange"}}>Edit</Button>
                    <Button onClick={() => _deleteBook(record.id)} type='text' style={{color: "red"}}>Delete</Button>
                </>
            }
        }

    ]), [_deleteBook, _editBook])
    

    return renderColumn
}