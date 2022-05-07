import { Breadcrumb, Button, Card, Divider, Table } from 'antd';
import React, { useEffect,  useState } from 'react';
import { addBook, editbook, getBooks } from '../../Providers/BookProvider';
import { VerifyToken } from '../../Providers/VerifyProvider';
import IsLogin from '../Util/IsLogin';
import BookModal from './BookModal';
import { useBooks } from './useBooks';
import useToggle from './useToggle';

const Book = () => {

    const isVerify = VerifyToken()
    const [books, setBooks] = useState([])
    const [book, setOneBook] = useState({})

    const [createModal, toggleCreate] = useToggle(false);
    const [editModal, toggleEdit] = useToggle(false)

    const renderColumn = useBooks(setBooks, setOneBook, toggleEdit)

    const _addBook = (values) => {
        addBook(values, setBooks)
        toggleCreate()
    }

    const _editBook = (_, values) => {
        console.log(values)
        editbook(book.id, values, setBooks)
        toggleEdit()
    }


    useEffect(() => {
        getBooks(setBooks)
    }, [])

    if(!isVerify) {
        return <IsLogin />
    }

    return (
        <>
            <section className='app container'>
                <Card style={{width: '100%'}}>
                    <h1>Books</h1>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="/dashboard">Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Books</Breadcrumb.Item>
                    </Breadcrumb>
                </Card>

                <br />
                <Button type='primary' onClick={() => toggleCreate()}>
                    Add a Book
                </Button>

                <br />
                <Divider />

                <Table columns={renderColumn} dataSource={books} />
            </section>

            {/* Create book */}
            <BookModal isVisisble={createModal} toggleModal={toggleCreate} callback={_addBook} />

            {/* Edit Book */}
            <BookModal isVisisble={editModal} toggleModal={toggleEdit} data={book} callback={_editBook} />
        </>
    );
};

export default Book;