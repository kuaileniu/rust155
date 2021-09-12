initSidebarItems({"fn":[["from_mut","将引用转换为 T 转换为长度为 1 的切片 (不进行复制)。"],["from_raw_parts","根据指针和长度形成切片。"],["from_raw_parts_mut","执行与 [`from_raw_parts`] 相同的功能，除了返回可变切片。"],["from_ref","将引用转换为 T 转换为长度为 1 的切片 (不进行复制)。"],["range","执行范围的边界检查。"]],"struct":[["ArrayChunks","在 (non-overlapping) 块 (一次 `N` 元素) 中的切片上进行迭代，从切片的开头开始。"],["ArrayChunksMut","在 (non-overlapping) 可变块 (一次 `N` 元素) 中的切片上进行迭代，从切片的开头开始。"],["ArrayWindows","在切片上以重叠块 (一次 `N` 个元素) 的方式在切片上进行窗口化的迭代器，从切片的开头开始"],["Chunks","在 (non-overlapping) 块 (一次 `chunk_size` 元素) 中的切片上进行迭代，从切片的开头开始。"],["ChunksExact","在 (non-overlapping) 块 (一次 `chunk_size` 元素) 中的切片上进行迭代，从切片的开头开始。"],["ChunksExactMut","在 (non-overlapping) 可变块 (一次 `chunk_size` 元素) 中的切片上进行迭代，从切片的开头开始。"],["ChunksMut","在 (non-overlapping) 可变块 (一次 `chunk_size` 元素) 中的切片上进行迭代，从切片的开头开始。"],["GroupBy","(non-overlapping) 块中由谓词分隔的切片上的迭代器。"],["GroupByMut","在 (non-overlapping) 可变块中由谓词分隔的切片上的迭代器。"],["Iter","不可变切片迭代器"],["IterMut","可变切片迭代器。"],["RChunks","在 (non-overlapping) 块 (一次 `chunk_size` 元素) 中的切片上进行迭代，从切片的末尾开始。"],["RChunksExact","在 (non-overlapping) 块 (一次 `chunk_size` 元素) 中的切片上进行迭代，从切片的末尾开始。"],["RChunksExactMut","从切片末尾开始，在 (non-overlapping) 可变块 (一次 `chunk_size` 个元素) 中的切片上进行迭代。"],["RChunksMut","从切片末尾开始，在 (non-overlapping) 可变块 (一次 `chunk_size` 个元素) 中的切片上进行迭代。"],["RSplit","从切片的末尾开始，由与谓词函数匹配的元素分隔的子切片上的迭代器。"],["RSplitMut","vector 的子切片上的迭代器，该迭代器由与 `pred` 匹配的元素分隔，从切片的末尾开始。"],["RSplitN","在子切片上进行迭代的迭代器，这些子切片由与谓词函数匹配的元素分隔，从切片的末尾开始，并限于给定的拆分数。"],["RSplitNMut","在子切片上进行迭代的迭代器，这些子切片由与谓词函数匹配的元素分隔，从切片的末尾开始，并限于给定的拆分数。"],["Split","在子切片上进行迭代的迭代器，这些子切片由与谓词函数匹配的元素分隔。"],["SplitMut","vector 的可变子片段上的迭代器，该子片段由与 `pred` 匹配的元素分隔。"],["SplitN","在子切片上进行迭代的迭代器，这些子切片由与谓词函数匹配的元素分隔，限于给定的拆分数。"],["SplitNMut","在子切片上进行迭代的迭代器，这些子切片由与谓词函数匹配的元素分隔，限于给定的拆分数。"],["Windows","长度为 `size` 的重叠子切片上的迭代器。"]],"trait":[["Concat","`[T]::concat` 的辅助程序 trait。"],["Join","`[T]::join` 的辅助 trait"],["SliceIndex","帮助程序 trait 用于索引操作。"]]});