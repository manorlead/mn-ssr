import { AppstoreOutlined } from '@ant-design/icons'
import { Checkbox, Dropdown, Menu, Table } from 'antd'
import { ColumnGroupType, ColumnType, TableProps } from 'antd/lib/table'
import React, { ReactNode, useEffect, useState } from 'react'

export type StatefulColumnsType<RecordType> = ((
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
) & { checked?: boolean; disabled?: boolean; ignored?: boolean })[]

export function ColumnSelector<RecordType extends object = any>(props: {
  columns: StatefulColumnsType<RecordType>
  onChange: (columns: StatefulColumnsType<RecordType>) => void
}) {
  const { columns, onChange } = props

  return (
    <Menu>
      {columns.map((c, i) => {
        if (!c.ignored) {
          return (
            <Menu.Item key={i}>
              <Checkbox
                disabled={c.disabled}
                checked={c.checked ?? true}
                onChange={(e) => {
                  onChange(
                    columns.map((c, index) =>
                      index === i ? { ...c, checked: e.target.checked } : c
                    )
                  )
                }}
              >
                {c.title}
              </Checkbox>
            </Menu.Item>
          )
        } else {
          return <></>
        }
      })}
    </Menu>
  )
}

export function ExpandableTable<RecordType extends object = any>(
  props: Omit<TableProps<RecordType>, 'columns'> & {
    columns: StatefulColumnsType<RecordType>
  } & { columnSelector?: ReactNode }
) {
  const { columns, dataSource, columnSelector, ...rest } = props
  const [selectedColumns, setSelectedColumns] = useState(columns)

  useEffect(() => {
    setSelectedColumns(columns)
  }, [columns])

  return (
    <Table
      columns={[
        ...selectedColumns.filter((col) => col.checked ?? true),
        {
          title: (
            <Dropdown
              overlay={
                <ColumnSelector
                  columns={selectedColumns}
                  onChange={setSelectedColumns}
                />
              }
              trigger={['click']}
            >
              {columnSelector || <AppstoreOutlined />}
            </Dropdown>
          ),
          key: 'columnFilter',
          width: 50
        }
      ]}
      dataSource={dataSource}
      {...rest}
    />
  )
}
